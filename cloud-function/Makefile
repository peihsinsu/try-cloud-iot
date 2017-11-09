TOPIC=iot-demo-topic-telemetry
BUCKET_NAME=gs://staging.simon-lab.appspot.com/

deploy:
	gcloud beta functions deploy iot-demo --stage-bucket ${BUCKET_NAME} --trigger-topic ${TOPIC}
