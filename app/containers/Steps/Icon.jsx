import React, { Component } from 'react';
import { Steps, Step, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <Steps current={1} status="process">
        <Step icon={<Icon type="user" />} title="第一步" description="这里是描述" />
        <Step icon={<Icon type="idcard" />} title="第二步" description="这里是描述" />
        <Step icon={<Icon type="smile" />} title="完成" description="这里是描述" />
      </Steps>
    );
  }
}
