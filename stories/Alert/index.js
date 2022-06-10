import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import AlertDoc from '../../src/components/Alert/README.md';
import Basic from '../../app/containers/Alert/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Alert', module)
              .addDecorator(withReadme(AlertDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));