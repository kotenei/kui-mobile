import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Color from './Color';
import Tip from './Tip';
import Vertical from './Vertical';
import Size from './Size';

export default class View extends Component {
  render() {
    const header = <Header goBack>Loading 加载</Header>;
    return (
      <Page header={header} fixedHeader >
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="自定义颜色">
          <Color />
        </Block>
        <Block title="尺寸">
          <Size />
        </Block>
        <Block title="加载提示">
          <Tip />
        </Block>
        <Block title="垂直方向">
          <Vertical />
        </Block>
      </Page>
    );
  }
}
