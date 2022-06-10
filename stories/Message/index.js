import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import MessageDoc from '../../src/components/Message/README.md';
import Basic from '../../app/containers/Message/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Message', module)
              .addDecorator(withReadme(MessageDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));