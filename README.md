# GCP IoT-Core Demo

Here is a demo for GCP IoT Core... You can follow the flow to quick create your IoT Core Service.

Note... 
* Please chage to your project first....
* Install and auth gcloud command...
* Create pubsub for your iot-core use...

## Create IoT-Core

Change your path to mqtt-client...

Create key

```
make gen-key
```

Create IoT-Core registry

```
make create-registry
```

Create device

```
make create-device
```

## Create Cloud Function

Change your path to cloud-function...

Deploy the cloud function...

```
make deploy
```
