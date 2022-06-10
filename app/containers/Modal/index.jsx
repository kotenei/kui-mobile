import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Title from './Title';
import Simple from './Simple';

const prefixCls = 'app-modal';

export default class View extends Component {
  render() {
    const header = <Header goBack>Modal 模态框</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="无标题">
          <Title />
        </Block>
        <Block title="简易操作">
          <Simple />
        </Block>
      </Page>
    );
  }
}
