import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import DatePickerDoc from '../../src/components/DatePicker/README.md';
import Basic from '../../app/containers/DatePicker/Basic';
import BasicDoc from './doc/Basic.md';
import Date from '../../app/containers/DatePicker/Date';
import DateDoc from './doc/Date.md';
import Time from '../../app/containers/DatePicker/Time';
import TimeDoc from './doc/Time.md';
import YearMonth from '../../app/containers/DatePicker/YearMonth';
import YearMonthDoc from './doc/YearMonth.md';
export default () =>
            storiesOf('DatePicker', module)
              .addDecorator(withReadme(DatePickerDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Date', withDocs(DateDoc, () => <h1>示例代码</h1>)).add('Time', withDocs(TimeDoc, () => <h1>示例代码</h1>)).add('YearMonth', withDocs(YearMonthDoc, () => <h1>示例代码</h1>));