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
  
  var dataset = bigquery.dataset('iotdemo');
  var table = dataset.table('demo');
  
  table.insert({
    msg: txt,
    ts: new Date().getTime()
  }, function(err, doc) {
    if(err) return console.log('insert bigquery error....', err);
    console.log('insert result:', doc);
  });

  // We're just going to log the message to prove that
  // it worked.
  console.log(txt);

  // Don't forget to call the callback.
  callback();
};

