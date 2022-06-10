import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { DatePickerProps, DatePickerState } from './typing';
import { Picker } from '../Picker';
import {
  addYears,
  getDaysInMonth,
  addHours,
  addMinutes,
  addSeconds,
  setYear,
  setMonth,
  setDate,
} from 'date-fns';
import { Column } from '../Picker/typing';

const prefixCls = 'k-datepicker';

class DatePicker extends PureComponent<DatePickerProps, DatePickerState> {
  public static defaultProps = {
    mode: 'date',
    minDate: new Date('1900-01-01'),
    maxDate: addYears(new Date(new Date().getFullYear(), 0, 1), 10),
    defalutValue: new Date(),
    show: false,
  };
  public static getDerivedStateFromProps(nextProps, nextState) {
    if ('value' in nextProps && !nextProps.show) {
      return {
        date: nextProps.value,
        tmpDate: nextProps.value,
      };
    }
    return null;
  }

  private tmpValue: any;

  constructor(props) {
    super(props);
    this.state = {
      date: props.value || props.defalutValue || new Date(),
      tmpDate: props.value || props.defalutValue || new Date(),
    };
  }

  public componentDidMount() {}

  public render() {
    const { title, show } = this.props;
    const data = this.getPickerData();
    const value = this.getPickerValue();
    return (
      <Picker
        title={title}
        data={data}
        show={show}
        showHeader
        value={value}
        onCancel={this.handleCancel}
        onOK={this.handleOK}
        onChange={this.handleChange}
      />
    );
  }

  private handleCancel = () => {
    const { onCancel } = this.props;
    this.setState({
      tmpDate: this.state.date,
    });
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = (value, selected) => {
    const { onOK } = this.props;
    const { tmpDate } = this.state;
    if (!('value' in this.props)) {
      this.setState({
        date: tmpDate,
      });
    }
    if (onOK) {
      onOK(tmpDate);
    }
  };

  private handleChange = (value, selected) => {
    const { onChange } = this.props;
    const date = this.valueToDate(value);
    this.setState({
      tmpDate: date,
    });
    if (onChange) {
      onChange(date);
    }
  };

  private getPickerData() {
    const { mode, minDate, maxDate, formatter, hourStep, minuteStep, secondStep } = this.props;
    const { tmpDate } = this.state;
    const now = new Date();
    const tmpMinDate = minDate || new Date('1900-01-01');
    const tmpMaxDate = maxDate || addYears(new Date(now.getFullYear(), 0, 1), 10);
    const data: Column[][] = [];
    const startYear = tmpMinDate.getFullYear();
    const endYear = tmpMaxDate.getFullYear();
    const allDays = getDaysInMonth(tmpDate);
    const years = this.getPickerItems('year', startYear, endYear);
    const months = this.getPickerItems('month', 1, 12);
    const days = this.getPickerItems('day', 1, allDays);
    const hours = this.getPickerItems('hour', 0, 23, hourStep);
    const minutes = this.getPickerItems('minute', 0, 59, minuteStep);
    const seconds = this.getPickerItems('second', 0, 59, secondStep);

    switch (mode) {
      case 'time':
        data.push(hours);
        data.push(minutes);
        data.push(seconds);
        break;
      case 'datetime':
        data.push(years);
        data.push(months);
        data.push(days);
        data.push(hours);
        data.push(minutes);
        data.push(seconds);
        break;
      case 'year':
        data.push(years);
        break;
      case 'yearmonth':
        data.push(years);
        data.push(months);
        break;
      default:
        data.push(years);
        data.push(months);
        data.push(days);
        break;
    }

    return data;
  }

  private getPickerValue() {
    const { tmpDate } = this.state;
    const { mode } = this.props;
    const value: any = [];
    const date = tmpDate;
    switch (mode) {
      case 'time':
        value.push(date.getHours(), date.getMinutes(), date.getSeconds());
        break;
      case 'datetime':
        value.push(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
        );
        break;
      case 'year':
        value.push(date.getFullYear());
        break;
      case 'yearmonth':
        value.push(date.getFullYear(), date.getMonth() + 1);
        break;
      default:
        value.push(date.getFullYear(), date.getMonth() + 1, date.getDate());
        break;
    }
    return value;
  }

  private getPickerItems(type, start, end, step: number = 1): Column[] {
    const { formatter } = this.props;
    const ret: any = [];
    for (let i = start; i <= end; i += step) {
      const text = i.toString().padStart(2, '0');
      ret.push({ label: formatter ? formatter(type, text) : text, value: i });
    }
    return ret;
  }

  private valueToDate(value: number[]) {
    const { mode } = this.props;
    const { date } = this.state;
    let newDate;
    let tmpDay;
    let allDays;

    switch (mode) {
      case 'time':
        newDate = new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getSeconds(),
          value[0],
          value[1],
          value[2],
        );
        break;
      case 'datetime':
        tmpDay = value[2];
        allDays = getDaysInMonth(new Date(value[0], value[1] - 1, 1));
        if (allDays < value[2]) {
          tmpDay = allDays;
        }

        newDate = new Date(value[0], value[1] - 1, tmpDay, value[3], value[4], value[5]);
        break;
      case 'year':
        newDate = setYear(date, value[0]);
        break;
      case 'yearmonth':
        newDate = setYear(date, value[0]);
        newDate = setMonth(newDate, value[1] - 1);
        break;
      default:
        tmpDay = value[2];
        allDays = getDaysInMonth(new Date(value[0], value[1] - 1, 1));
        if (allDays < value[2]) {
          tmpDay = allDays;
        }
        newDate = setYear(date, value[0]);
        newDate = setMonth(newDate, value[1] - 1);
        newDate = setDate(newDate, tmpDay);
        break;
    }
    return newDate;
  }
}

export default DatePicker;
