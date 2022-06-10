import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Multiple from './Multiple';
import Linkage from './Linkage';

const prefixCls = 'app-picker';

export default class View extends Component {
  render() {
    const header = <Header goBack>Picker 选择器</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="多列选择" bodyPadding={false}>
          <Multiple />
        </Block>
        <Block title="多级联动" bodyPadding={false}>
          <Linkage />
        </Block>
      </Page>
    );
  }
}
