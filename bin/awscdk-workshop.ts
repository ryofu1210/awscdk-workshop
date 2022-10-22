#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwscdkWorkshopStack } from '../lib/awscdk-workshop-stack';

const app = new cdk.App();
new AwscdkWorkshopStack(app, 'AwscdkWorkshopStack');
