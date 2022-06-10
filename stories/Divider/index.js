import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import DividerDoc from '../../src/components/Divider/README.md';
import Basic from '../../app/containers/Divider/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Divider', module)
              .addDecorator(withReadme(DividerDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));