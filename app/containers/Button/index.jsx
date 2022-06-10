import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Size from './Size';
import Group from './Group';
import Icon from './Icon';

const prefixCls = 'app-button';

export default class View extends Component {
  render() {
    const header = <Header goBack>Button 按钮</Header>;
    return (
      <Page header={header} className={prefixCls} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="尺寸">
          <Size />
        </Block>
        <Block title="图标">
          <Icon />
        </Block>
        <Block title="按钮组">
          <Group />
        </Block>
      </Page>
    );
  }
}
