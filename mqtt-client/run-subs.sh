#!/bin/bash
node subs.js \
  --project_id=simon-lab \
  --registry_id=iot-demo \
  --device_id=my-node-device \
  --private_key_file=./rsa_private.pem \
  --algorithm=RS256 \
  --cloud_region=asia-east1 \
  --num_messages=50
