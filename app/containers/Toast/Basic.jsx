import React, { Component } from 'react';
import { Toast, Button } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          full
          onClick={() => {
            Toast.info('提示内容');
          }}
        >
          文字提示
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Toast.info('这是一条长文字提示，超过一定字数就会换行');
          }}
        >
          长文字提示
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Toast.info('带遮罩层提示', {
              mask: true,
            });
          }}
        >
          带遮罩层
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Toast.success('成功提示');
          }}
        >
          成功提示
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Toast.fail('失败提示');
          }}
        >
          失败提示
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Toast.warning('告警提示');
          }}
        >
          告警提示
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Toast.loading('加载中...');
          }}
        >
          加载提示
        </Button>
      </React.Fragment>
    );
  }
}
