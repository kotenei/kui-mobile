```jsx
import React, { Component } from 'react';
import { Picker, Button, Toast, Input } from 'kui-mobile';
import { provinceList } from '../../data/areaData';

const columns = [
  provinceList.map(item => {
    return {
      label: item.text,
      value: item.value,
    };
  }),
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
          title="选择地区"
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
    this.setState({
      value: selected[0].label,
      show: false,
    });
  };
  handleChange = (value, selected) => {
    Toast.info(`当前选中：${selected[0].label}`);
  };
}

```
