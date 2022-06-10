import React, { Component } from 'react';
import { Picker, Button, Toast, Input } from 'kui-mobile';

const columns = [
  [{ label: '2018', value: '2018' }, { label: '2019', value: '2019' }],
  [
    { label: '春', value: '1' },
    { label: '夏', value: '2', disabled: true },
    { label: '秋', value: '3' },
    { label: '冬', value: '4' },
  ],
];

export default class Demo extends Component {
  state = {
    show: false,
    data: columns,
    value: '',
  };
  componentDidMount() {}
  render() {
    const { show, value, data } = this.state;

    return (
      <React.Fragment>
        <Input placeholder="请选择" value={value} onClick={this.handleClick} />
        <Picker
          title="选择季节"
          data={data}
          show={show}
          showHeader
          onCancel={this.handleCancel}
          onOK={this.handleOK}
          onChange={this.handleChange}
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
  handleOK = (value, selected) => {
    let arrStr = [];
    selected.forEach(item => {
      arrStr.push(item.label);
    });
    this.setState({
      value: arrStr.join(' '),
      show: false,
    });
  };
  handleChange = (value, selected) => {
    let arrStr = [];
    selected.forEach(item => {
      arrStr.push(item.label);
    });
    Toast.info(`当前选中值：${arrStr.join(' ')}`);
  };
}
