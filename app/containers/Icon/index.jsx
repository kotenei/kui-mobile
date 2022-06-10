import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';

const prefixCls = 'app-icon';

export default class View extends Component {
  render() {
    const header = <Header goBack>Icon 图标</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block bodyPadding={false}>
          <Basic />
        </Block>
      </Page>
    );
  }
}
