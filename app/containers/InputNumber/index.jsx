import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Disabled from './Disabled';
import Step from './Step';

const prefixCls = 'app-inputnumber';

export default class View extends Component {
  render() {
    const header = <Header goBack>InputNumber 数字输入框</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法"  >
          <Basic />
        </Block>
        <Block title="禁用状态"  >
          <Disabled />
        </Block>
        <Block title="步进器"  >
          <Step />
        </Block>
      </Page>
    );
  }
}
