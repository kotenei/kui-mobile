import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import PullRefreshDoc from '../../src/components/PullRefresh/README.md';
import Basic from '../../app/containers/PullRefresh/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('PullRefresh', module)
              .addDecorator(withReadme(PullRefreshDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));