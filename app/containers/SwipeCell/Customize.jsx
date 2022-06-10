import React, { Component } from 'react';
import { SwipeCell, Modal } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <SwipeCell
          autoClose={false}
          cellProps={{
            title: '单元格',
            value: '内容',
          }}
          left={[
            {
              text: '选择',
              color: 'primary',
            },
          ]}
          right={[{ text: '删除', color: 'danger' }]}
          onClick={this.handleClick}
        />
      </React.Fragment>
    );
  }
  handleClick = (type, instance) => {
    if (type === 'right') {
      Modal.confirm({
        title: '标题',
        content: '您确认要删除吗？',
        onOK() {
          instance.close();
        },
      });
    } else {
      instance.close();
    }
  };
}
