import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Accordion from './Accordion';

const prefixCls = 'app-icon';

export default class View extends Component {
  render() {
    const header = <Header goBack>Collapse 折叠面板</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="手风琴" bodyPadding={false}>
          <Accordion />
        </Block>
      </Page>
    );
  }
}
