import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import ToastDoc from '../../src/components/Toast/README.md';
import Basic from '../../app/containers/Toast/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Toast', module)
              .addDecorator(withReadme(ToastDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));