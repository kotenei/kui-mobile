import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import LazyLoadDoc from '../../src/components/LazyLoad/README.md';
import Basic from '../../app/containers/LazyLoad/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('LazyLoad', module)
              .addDecorator(withReadme(LazyLoadDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));