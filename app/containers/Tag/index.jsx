import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Line from './Line';

const prefixCls = 'app-tag';

export default class View extends Component {
  render() {
    const header = <Header goBack>Tag 标签</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="线框">
          <Line />
        </Block>
      </Page>
    );
  }
}
