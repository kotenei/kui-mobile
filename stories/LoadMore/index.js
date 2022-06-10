import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import LoadMoreDoc from '../../src/components/LoadMore/README.md';
import Basic from '../../app/containers/LoadMore/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('LoadMore', module)
              .addDecorator(withReadme(LoadMoreDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));