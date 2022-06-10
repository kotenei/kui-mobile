import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Square from './Square';
import Size from './Size';

const prefixCls = 'app-avatar';

export default class View extends Component {
  render() {
    const header = <Header goBack>Avatar 头像</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="方型">
          <Square />
        </Block>
        <Block title="尺寸">
          <Size />
        </Block>
      </Page>
    );
  }
}
