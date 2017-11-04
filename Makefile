export PROJECT_ID=simon-lab

gen-key:
	openssl req -x509 -newkey rsa:2048 -keyout rsa_private.pem -nodes -out rsa_cert.pem -subj "/CN=unused"
#	ssh-keygen -t rsa -f rsa_private 
#	openssl -in ./rsa_private -outform pem > rsa_private.pem
#	chmod 600 rsa_private.pem
pull-subscrib:
	gcloud beta pubsub subscriptions pull --auto-ack projects/${PROJECT_ID}/subscriptions/iot-demo-telemetry
	gcloud beta pubsub subscriptions pull --auto-ack projects/${PROJECT_ID}/subscriptions/iot-demo-devstate
