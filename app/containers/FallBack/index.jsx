import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import { Loading } from 'kui-mobile';

const prefixCls = 'app-fallback';

const FallBack = props => {
  return (
    <div className={prefixCls}>
      <Loading tip="正在加载，请稍后" vertical/>
    </div>
  );
};

export default FallBack;
