import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Card from './Card';
import Position from './Position';

const prefixCls = 'app-tabs';

export default class View extends Component {
  render() {
    const header = <Header goBack>Tabs 标签</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" bodyPadding={false}>
          <Basic />
        </Block>
        <Block title="卡片式" bodyPadding={false}>
          <Card />
        </Block>
        <Block title="位置" bodyPadding={false}>
          <Position />
        </Block>
      </Page>
    );
  }
}
