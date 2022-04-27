#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CDKDemoStack } from '../lib/cdk-demo-stack';

const app = new cdk.App();
new CDKDemoStack(app, 'CDKDemoStack', {
  env: {
    account: '713411715170',
    region: 'us-east-1',
  }
});

app.synth();