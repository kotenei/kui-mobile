import React, { Component } from 'react';
import { Message, Button, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Button
          full
          onClick={() => {
            Message('提示内容');
          }}
        >
          显示消息通知
        </Button>
        <br />
        <Button
          full
          onClick={() => {
            Message(
              <React.Fragment>
                <Icon type="message" /> 自定义提示内容
              </React.Fragment>,
              { color: 'success' },
            );
          }}
        >
          自定义消息通知
        </Button>
      </React.Fragment>
    );
  }
}
