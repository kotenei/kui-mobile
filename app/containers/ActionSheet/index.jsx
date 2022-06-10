import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Cancel from './Cancel';
import Title from './Title';

const prefixCls = 'app-actionsheet';

export default class View extends Component {
  render() {
    const header = <Header goBack>ActionSheet 动作面板</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="带取消按钮ActionSheet">
          <Cancel />
        </Block>
        <Block title="带标题ActionSheet">
          <Title />
        </Block>
      </Page>
    );
  }
}
