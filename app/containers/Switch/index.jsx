import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Status from './Status';
import WordIcon from './WordIcon';
import Loading from './Loading';

const prefixCls = 'app-switch';

export default class View extends Component {
  render() {
    const header = <Header goBack>Switch 开关</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="状态">
          <Status />
        </Block>
        <Block title="文字和图标">
          <WordIcon />
        </Block>
        <Block title="加载中">
          <Loading />
        </Block>
      </Page>
    );
  }
}
