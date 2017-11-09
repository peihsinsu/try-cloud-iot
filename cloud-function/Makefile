TOPIC=iot-demo-topic-telemetry
BUCKET_NAME=gs://staging.simon-lab.appspot.com/

deploy:
	gcloud beta functions deploy subscribe --stage-bucket ${BUCKET_NAME} --trigger-topic ${TOPIC}

delete:
	gcloud beta functions delete subscribe
