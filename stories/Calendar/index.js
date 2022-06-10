import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import CalendarDoc from '../../src/components/Calendar/README.md';
import Basic from '../../app/containers/Calendar/Basic';
import BasicDoc from './doc/Basic.md';
import Range from '../../app/containers/Calendar/Range';
import RangeDoc from './doc/Range.md';
export default () =>
            storiesOf('Calendar', module)
              .addDecorator(withReadme(CalendarDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Range', withDocs(RangeDoc, () => <h1>示例代码</h1>));