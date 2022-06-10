import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import InputNumberDoc from '../../src/components/InputNumber/README.md';
import Basic from '../../app/containers/InputNumber/Basic';
import BasicDoc from './doc/Basic.md';
import Disabled from '../../app/containers/InputNumber/Disabled';
import DisabledDoc from './doc/Disabled.md';
import Step from '../../app/containers/InputNumber/Step';
import StepDoc from './doc/Step.md';
export default () =>
            storiesOf('InputNumber', module)
              .addDecorator(withReadme(InputNumberDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Disabled', withDocs(DisabledDoc, () => <h1>示例代码</h1>)).add('Step', withDocs(StepDoc, () => <h1>示例代码</h1>));