'use strict';
const bigquery = require('@google-cloud/bigquery')({
    projectId: 'simon-lab'
  });

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event The Cloud Functions event.
 * @param {!Function} The callback function.
 */
exports.subscribe = function subscribe(event, callback) {
  // The Cloud Pub/Sub Message object.
  const pubsubMessage = event.data;
  var txt = Buffer.from(pubsubMessage.data, 'base64').toString();

  console.log(txt);
  
  var dataset = bigquery.dataset('iotdemo');
  var table = dataset.table('demo');
  var loadavg = txt.split(',');
  var data = {
    loadavg_1min: parseFloat(loadavg[0]),
    loadavg_5min: parseFloat(loadavg[1]),
    loadavg_15min: parseFloat(loadavg[2]),
    ts: new Date().getTime()
  };
  
  //console.log('>>>data:', data);
  
  table.insert({
    loadavg_1min: parseFloat(loadavg[0]),
    loadavg_5min: parseFloat(loadavg[1]),
    loadavg_15min: parseFloat(loadavg[2]),
    ts: new Date().getTime()
  }, function(err, doc) {
    if(err) {
      console.log('origin txt:', txt);
      return console.log('insert bigquery error....', err);
    }
    console.log('insert result:', doc);
  });
  

  // Don't forget to call the callback.
  callback();
};

