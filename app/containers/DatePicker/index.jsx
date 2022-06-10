import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Date from './Date';
import YearMonth from './YearMonth';
import Time from './Time';

export default class View extends Component {
  render() {
    const header = <Header goBack>DatePicker 日期选择</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="完整日期时间">
          <Basic />
        </Block>
        <Block title="选择日期（年月日）">
          <Date />
        </Block>
        <Block title="选择日期（年月）">
          <YearMonth />
        </Block>
        <Block title="选择时间">
          <Time />
        </Block>
      </Page>
    );
  }
}
