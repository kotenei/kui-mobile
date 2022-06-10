import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Half from './Half';
import Disabled from './Disabled';
import Character from './Character';

const prefixCls = 'app-icon';

export default class View extends Component {
  render() {
    const header = <Header goBack>Rate 评分</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="半星">
          <Half />
        </Block>
        <Block title="禁用">
          <Disabled />
        </Block>
        <Block title="自定义">
          <Character />
        </Block>
      </Page>
    );
  }
}
