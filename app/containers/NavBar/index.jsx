import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';

export default class View extends Component {
  render() {
    const header = <Header goBack>NavBar 导航栏</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
      </Page>
    );
  }
}
