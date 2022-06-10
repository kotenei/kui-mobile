import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Group from './Group';
import Disabled from './Disabled';
import Cell from './Cell';

const prefixCls = 'app-icon';

export default class View extends Component {
  render() {
    const header = <Header goBack>Checkbox 复选框</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="基础用法" >
          <Basic />
        </Block>
        <Block title="复选框组" >
          <Group />
        </Block>
        <Block title="禁用" >
          <Disabled />
        </Block>
        <Block title="与 Cell 组件组合" bodyPadding={false}>
          <Cell />
        </Block>
      </Page>
    );
  }
}
