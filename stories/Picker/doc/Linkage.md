```jsx
import React, { Component } from 'react';
import { Picker, Button, Toast, Input } from 'kui-mobile';
import { provinceList, cityList, areaList } from '../../data/areaData';

const columns = [
  provinceList.map(item => {
    return {
      label: item.text,
      value: item.value,
    };
  }),
  cityList[110000].map(item => {
    return {
      label: item.text,
      value: item.value,
    };
  }),
  areaList[110100].map(item => {
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
    pickerValue: [columns[0][0].value, columns[1][0].value, columns[2][0].value],
  };
  componentDidMount() {}
  render() {
    const { show, value, data, pickerValue } = this.state;

    return (
      <React.Fragment>
        <Input placeholder="请选择" value={value} onClick={this.handleClick} />
        <Picker
          title="选择地区"
          data={data}
          show={show}
          showHeader
          value={pickerValue}
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
      ...this.orgData,
    });
  };
  handleOK = (value, selected) => {
    let arrStr = [];
    selected.forEach(item => {
      arrStr.push(item.label);
    });
    this.setState({
      value: arrStr.join(' '),
      pickerValue: value,
      show: false,
    });
    this.orgData = null;
  };
  handleChange = (value, selected, columnIndex) => {
    const { data, pickerValue } = this.state;
    const selectedValue = value[columnIndex];
    const newValue = [...value];
    let pList, cList, aList;
    this.orgData = {
      data,
      pickerValue,
    };
    switch (columnIndex) {
      case 0:
        // 省
        pList = data[0];
        cList = cityList[selectedValue].map(item => {
          return {
            label: item.text,
            value: item.value,
          };
        });
        aList = areaList[cList[0].value].map(item => {
          return {
            label: item.text,
            value: item.value,
          };
        });
        newValue[1] = (cList[0] && cList[0].value) || '';
        newValue[2] = (aList[0] && aList[0].value) || '';
        break;
      case 1:
        // 市
        pList = data[0];
        cList = data[1];
        aList = areaList[selectedValue].map(item => {
          return {
            label: item.text,
            value: item.value,
          };
        });
        newValue[2] = (aList[0] && aList[0].value) || '';
        break;
      case 2:
        // 区
        pList = data[0];
        cList = data[1];
        aList = data[2];
        break;
      default:
        break;
    }
    this.setState({
      data: [pList, cList, aList],
      pickerValue: newValue,
    });
  };
}

```
