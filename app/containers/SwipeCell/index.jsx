import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Customize from './Customize';

export default class View extends Component {
  render() {
    const header = <Header goBack>SwipeCell 滑动单元格</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="自定义关闭" bodyPadding={false}>
          <Customize />
        </Block>
      </Page>
    );
  }
}
