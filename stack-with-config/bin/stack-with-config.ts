#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StackWithConfigStack } from '../lib/main';

const app = new cdk.App();
new StackWithConfigStack(app, 'StackWithConfigStack');
