import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import TagDoc from '../../src/components/Tag/README.md';
import Basic from '../../app/containers/Tag/Basic';
import BasicDoc from './doc/Basic.md';
import Line from '../../app/containers/Tag/Line';
import LineDoc from './doc/Line.md';
export default () =>
            storiesOf('Tag', module)
              .addDecorator(withReadme(TagDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Line', withDocs(LineDoc, () => <h1>示例代码</h1>));