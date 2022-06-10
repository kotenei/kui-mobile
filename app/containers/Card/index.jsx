import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Full from './Full';

const prefixCls = 'app-card';

export default class View extends Component {
  render() {
    const header = <Header goBack>Card 卡片</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法"><Basic /></Block>
        <Block title="通栏" bodyPadding={false}><Full /></Block>
      </Page>
    );
  }
}
