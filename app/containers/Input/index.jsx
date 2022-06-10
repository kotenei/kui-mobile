import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Basic from './Basic';
import Title from './Title';
import Disabled from './Disabled';
import TextArea from './TextArea';

const prefixCls = 'app-input';

export default class View extends Component {
  render() {
    const header = <Header goBack>Input 输入框</Header>;
    return (
      <Page header={header} fixedHeader>
        <Block title="基础用法" bodyPadding={false} >
          <Basic />
        </Block>
        <Block title="带标题" bodyPadding={false} >
          <Title />
        </Block>
        <Block title="禁用输入框" bodyPadding={false} >
          <Disabled />
        </Block>
        <Block title="多行文本" bodyPadding={false} >
          <TextArea />
        </Block>
      </Page>
    );
  }
}
