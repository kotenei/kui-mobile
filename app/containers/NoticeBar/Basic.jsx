import React, { Component } from 'react';
import { NoticeBar, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <NoticeBar>Python之父声援中国程序员996ICU计划，Python要拒绝996公司？</NoticeBar>
        <br />
        <NoticeBar
          mode="link"
          onClick={() => {
            alert('click');
          }}
        >
          Python之父声援中国程序员996ICU计划，Python要拒绝996公司？
        </NoticeBar>
        <br />
        <NoticeBar icon={<Icon type="clock-circle" />}>自定义图标</NoticeBar>
        <br />
        <NoticeBar mode="closable">默认删除图标</NoticeBar>
        <br />
        <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>
          自定义操作区内容
        </NoticeBar>
      </React.Fragment>
    );
  }
}
