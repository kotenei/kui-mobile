import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Disabled from './Disabled';
import Step from './Step';
import Color from './Color';
import Range from './Range';
import Vertical from './Vertical';

const prefixCls = 'app-searchbar';

export default class View extends Component {
  render() {
    const header = <Header goBack>Slider 滑块</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="禁用">
          <Disabled />
        </Block>
        <Block title="指定步长">
          <Step />
        </Block>
        <Block title="自定义样式">
          <Color />
        </Block>
        <Block title="区间">
          <Range />
        </Block>
        <Block title="垂直方向">
          <Vertical />
        </Block>
      </Page>
    );
  }
}
