import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Dot from './Dot';

const prefixCls = 'app-badge';

export default class View extends Component {
  render() {
    const header = <Header goBack>Badge 徽章</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
          <br />
          <br />
          <br />
          <Dot />
        </Block>
      </Page>
    );
  }
}
