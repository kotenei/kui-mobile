import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import NoticeBarDoc from '../../src/components/NoticeBar/README.md';
import Basic from '../../app/containers/NoticeBar/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('NoticeBar', module)
              .addDecorator(withReadme(NoticeBarDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));