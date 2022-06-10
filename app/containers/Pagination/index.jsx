import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Icon from './Icon';
import HideNumber from './HideNumber';
import Number from './Number';
import Pointer from './Pointer';

export default class View extends Component {
  render() {
    const header = <Header goBack>Pagination 分页</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" >
          <Basic />
        </Block>
        <Block title="带图标和文字" >
          <Icon />
        </Block>
        <Block title="隐藏数值" >
          <HideNumber />
        </Block>
        <Block title="只显示数值" >
          <Number />
        </Block>
        <Block title="显示点" >
          <Pointer />
        </Block>
      </Page>
    );
  }
}
