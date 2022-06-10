import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Vertical from './Vertical';
import Event from './Event';

const prefixCls = 'app-swipe';

export default class View extends Component {
  render() {
    const header = <Header goBack>Swipe 轮播</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="监听事件" bodyPadding={false}>
          <Event />
        </Block>
        <Block title="垂直滚动" bodyPadding={false}>
          <Vertical />
        </Block>
      </Page>
    );
  }
}
