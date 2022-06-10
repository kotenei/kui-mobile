import React, { Component } from 'react';
import { DatePicker, Button, Toast, Input } from 'kui-mobile';
import { format } from 'date-fns';

export default class Demo extends Component {
  state = {
    show: false,
    value: '',
  };
  render() {
    const { show, value } = this.state;
    return (
      <React.Fragment>
        <Input
          placeholder="请选择"
          value={value && format(value, 'HH:mm:ss')}
          onClick={this.handleClick}
        />
        <DatePicker
          show={show}
          title="时间选择"
          onCancel={this.handleCancel}
          onOK={this.handleOK}
          onChange={this.handleChange}
          mode="time"
        />
      </React.Fragment>
    );
  }
  handleClick = type => {
    this.setState({
      show: true,
    });
    document.activeElement.blur();
  };
  handleCancel = () => {
    this.setState({
      show: false,
    });
  };
  handleOK = date => {
    this.setState({
      show: false,
      value: date,
    });
  };
  handleChange = date => {};
}
