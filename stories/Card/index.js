import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import CardDoc from '../../src/components/Card/README.md';
import Basic from '../../app/containers/Card/Basic';
import BasicDoc from './doc/Basic.md';
import Full from '../../app/containers/Card/Full';
import FullDoc from './doc/Full.md';
export default () =>
            storiesOf('Card', module)
              .addDecorator(withReadme(CardDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Full', withDocs(FullDoc, () => <h1>示例代码</h1>));