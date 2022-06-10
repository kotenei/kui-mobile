import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Color from './Color';

export default class View extends Component {
  render() {
    const header = <Header goBack>TabBar 标签栏</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="自定义颜色" bodyPadding={false}>
          <Color />
        </Block>
      </Page>
    );
  }
}
