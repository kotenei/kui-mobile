import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import Indeterminate from './Indeterminate';
import PercentInside from './PercentInside';
import PercentOutside from './PercentOutside';
import Circle from './Circle';

const prefixCls = 'app-progress';

export default class View extends Component {
  render() {
    const header = <Header goBack>Progress 进度条</Header>;
    return (
      <Page header={header} fixedHeader className={prefixCls}>
        <Block title="线形进度条 — 不确定进度" >
          <Indeterminate />
        </Block>
        <Block title="线形进度条 — 百分比外显" >
          <PercentOutside />
        </Block>
        <Block title="线形进度条 — 百分比内显" >
          <PercentInside />
        </Block>
        <Block title="环形进度条" >
          <Circle />
        </Block>
      </Page>
    );
  }
}
