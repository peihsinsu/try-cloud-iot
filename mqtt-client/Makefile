export PROJECT_ID=simon-lab
export REGISTRY=iot-demo
export DEVICE=my-node-device
gen-key:
	openssl req -x509 -newkey rsa:2048 -keyout rsa_private.pem -nodes -out rsa_cert.pem -subj "/CN=unused"
#	ssh-keygen -t rsa -f rsa_private 
#	openssl -in ./rsa_private -outform pem > rsa_private.pem
#	chmod 600 rsa_private.pem
pull-subscrib:
	gcloud beta pubsub subscriptions pull --auto-ack projects/${PROJECT_ID}/subscriptions/iot-demo-telemetry
	gcloud beta pubsub subscriptions pull --auto-ack projects/${PROJECT_ID}/subscriptions/iot-demo-devstate

list-registry:
	gcloud beta iot registries list --region=asia-east1

create-registry:
	gcloud beta iot registries create ${REGISTRY} --region=asia-east1\
		--event-pubsub-topic=iot-demo-topic-telemetry\
		--state-pubsub-topic=iot-demo-topic-devstate

delete-device:
	gcloud beta iot devices delete ${DEVICE} --region=asia-east1 --registry=${REGISTRY}

delete-registry:
	gcloud beta iot registries delete ${REGISTRY} --region=asia-east1

create-device:
	gcloud beta iot devices create ${DEVICE}\
		--region=asia-east1\
		--registry=${REGISTRY}\
	   	--public-key="path=${PWD}/rsa_cert.pem,type=rsa-x509-pem"
