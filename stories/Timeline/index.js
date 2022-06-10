import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import TimelineDoc from '../../src/components/Timeline/README.md';
import Basic from '../../app/containers/Timeline/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Timeline', module)
              .addDecorator(withReadme(TimelineDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));