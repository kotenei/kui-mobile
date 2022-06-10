```jsx
import React, { Component } from 'react';
import { Calendar, Input } from 'kui-mobile';
import { format } from 'date-fns';

export default class Demo extends Component {
  state = {
    open: false,
    value: null,
  };
  render() {
    const { open, value } = this.state;
    return (
      <React.Fragment>
        <Input value={(value && format(value, 'YYYY-MM-DD')) || ''} placeholder="请选择日期" readOnly onClick={this.handleClick} />
        <Calendar open={open} value={value} onCancel={this.handleCancel} onOK={this.handleOK} />
      </React.Fragment>
    );
  }
  handleClick = () => {
    this.setState({
      open: true,
    });
    document.activeElement.blur();
  };
  handleCancel = () => {
    this.setState({
      open: false,
    });
  };
  handleOK = date => {
    this.setState({
      value: date,
      open: false,
    });
  };
}

```
