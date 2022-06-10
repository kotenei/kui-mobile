import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Range from './Range';

export default class View extends Component {
  render() {
    const header = <Header goBack>Calendar 日历</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="区间日期">
          <Range />
        </Block>
      </Page>
    );
  }
}
