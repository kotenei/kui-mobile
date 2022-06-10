import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Vertical from './Vertical';
import Icon from './Icon';
import Status from './Status';

const prefixCls = 'app-steps';

export default class View extends Component {
  render() {
    const header = <Header goBack>Steps 步骤条</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法">
          <Basic />
        </Block>
        <Block title="自定义图标">
          <Icon />
        </Block>
        <Block title="运行步骤错误">
          <Status />
        </Block>
        <Block title="垂直步骤条">
          <Vertical />
        </Block>
      </Page>
    );
  }
}
