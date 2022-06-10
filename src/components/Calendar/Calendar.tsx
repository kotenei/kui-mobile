import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { addYears, addMonths, format, differenceInCalendarMonths, max, compareAsc } from 'date-fns';
import { CalendarProps, CalendarState } from './typing';
import CalendarHeader from './CalendarHeader';
import CalendarWeek from './CalendarWeek';
import CalendarMonth from './CalendarMonth';
import { Drawer } from '../Drawer';
import { Scroller } from '../Scroller';
import { PullRefresh } from '../PullRefresh';
import domUtils from '../..//utils/domUtils';

const prefixCls = 'k-calendar';
const now = new Date();

class Calendar extends PureComponent<CalendarProps, CalendarState> {
  public static defaultProps = {
    open: false,
    title: '日期选择',
    cancelText: '取消',
    okText: '确定',
    startDayText: '开始',
    endDayText: '结束',
    minDate: new Date(now.getFullYear(), 0, 1),
    maxDate: new Date(now.getFullYear(), 11, 31),
  };

  private static getDerivedStateFromProps(nextProps, nextState) {
    if ('value' in nextProps && !nextProps.open) {
      return {
        value: nextProps.value,
        tmpValue: nextProps.value,
      };
    }
    return null;
  }

  private pullRefreshInstance: any;
  private listInfo: any;
  private timer: number;

  constructor(props) {
    super(props);
    this.state = {
      viewData: [],
      canPullDown: true,
      canPullUp: true,
    };
  }

  public componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open && this.props.open) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setListInfo();
        this.scrollTo();
      }, 100);
    }
  }

  public componentDidMount() {
    this.init();
  }

  public renderViews() {
    const { viewData, value, tmpValue } = this.state;
    const { minDate, maxDate, startDayText, endDayText } = this.props;
    return viewData.map((date, index) => {
      return (
        <CalendarMonth
          key={index}
          date={date}
          value={tmpValue}
          minDate={minDate}
          maxDate={maxDate}
          startDayText={startDayText}
          endDayText={endDayText}
          onChange={this.handleChange}
        />
      );
    });
  }

  public render() {
    const { className, style, open, cancelText, okText, title } = this.props;
    const { canPullDown, canPullUp } = this.state;
    const classString = classnames({
      [prefixCls]: true,
    });
    return (
      <Drawer position="bottom" open={open} mask={false} className={classString} style={style}>
        <div className={`${prefixCls}__top`}>
          <CalendarHeader
            prefixCls={prefixCls}
            title={title}
            cancelText={cancelText}
            okText={okText}
            onCancel={this.handleCancel}
            onOK={this.handleOK}
          />
          <CalendarWeek prefixCls={prefixCls} />
        </div>
        <div ref="calendarMain" className={`${prefixCls}__main`}>
          <PullRefresh
            style={{
              height: '100%',
            }}
            pullDownWrapperProps={{
              pullingText: '加载上一个月',
              loosingText: '释放加载',
              successText: '加载成功',
            }}
            pullDownRefresh={canPullDown}
            pullUpload={canPullUp}
            onPullingDown={this.handlePullingDown}
            onPullingUp={this.handlePullingUp}
            onInit={this.pullRefreshInit}
          >
            <div className={`${prefixCls}__wrapper`}>{this.renderViews()}</div>
          </PullRefresh>
        </div>
      </Drawer>
    );
  }

  private pullRefreshInit = instance => {
    this.pullRefreshInstance = instance;
  };

  private handleCancel = () => {
    const { onCancel } = this.props;
    this.setState({
      tmpValue: this.state.value,
    });
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = () => {
    const { onOK } = this.props;
    const { value, tmpValue } = this.state;
    if (!('value' in this.props)) {
      this.setState({
        value: this.state.tmpValue,
      });
    }
    if (onOK) {
      onOK(this.state.tmpValue);
    }
  };

  private handleChange = date => {
    const { range, onChange } = this.props;
    const { tmpValue } = this.state;
    let newValue = date;
    if (range) {
      if (tmpValue && Array.isArray(tmpValue)) {
        const maxDate = max(...tmpValue);
        newValue = [date, maxDate].sort(compareAsc);
        if (tmpValue.length === 2) {
          newValue = [date];
        }
      } else {
        newValue = [date];
      }
    }
    this.setState({
      tmpValue: newValue,
    });
    if (onChange) {
      onChange(newValue);
    }
  };

  private handlePullingDown = callback => {
    const { minDate } = this.props;
    const { viewData } = this.state;
    const date = viewData[0];
    const newDate = addMonths(date, -1);

    if (minDate && differenceInCalendarMonths(newDate, minDate) >= 0) {
      const canPullDown = format(newDate, 'YYYYMM') !== format(minDate, 'YYYYMM');
      this.setState(
        {
          viewData: [newDate, ...viewData],
          canPullDown,
        },
        () => {
          callback({
            status: canPullDown ? 'success' : 'close',
          });
        },
      );
    } else {
      this.setState(
        {
          canPullDown: false,
        },
        () => {
          callback({
            status: 'close',
          });
        },
      );
    }
  };

  private handlePullingUp = callback => {
    const { maxDate } = this.props;
    const { viewData } = this.state;
    const date = viewData[viewData.length - 1];
    const newDate = addMonths(date, 1);

    if (maxDate && newDate <= maxDate) {
      const canPullUp = format(newDate, 'YYYYMM') !== format(maxDate, 'YYYYMM');
      this.setState(
        {
          viewData: [...viewData, newDate],
          canPullUp,
        },
        () => {
          callback({
            status: canPullUp ? 'success' : 'close',
          });
        },
      );
    } else {
      this.setState(
        {
          canPullUp: false,
        },
        () => {
          callback({
            status: 'close',
          });
        },
      );
    }
  };

  private init() {
    const { minDate, maxDate } = this.props;
    const minDateFirstDayOfMonth =
      minDate && new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    const maxDateFirstDayOfMonth =
      maxDate && new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);
    const value = this.props.value || this.props.defaultValue;
    let canPullDown = true;
    let canPullUp = true;
    let firstDayOfMonth;

    if (value) {
      if (Array.isArray(value) && value.length > 0) {
        firstDayOfMonth = new Date(value[0].getFullYear(), value[0].getMonth(), 1);
      } else if (!Array.isArray(value)) {
        firstDayOfMonth = new Date(value.getFullYear(), value.getMonth(), 1);
      }
    }

    if (!firstDayOfMonth) {
      firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    if (minDateFirstDayOfMonth && firstDayOfMonth <= minDateFirstDayOfMonth) {
      firstDayOfMonth = minDateFirstDayOfMonth;
      canPullDown = false;
    }

    if (maxDateFirstDayOfMonth && firstDayOfMonth >= maxDateFirstDayOfMonth) {
      firstDayOfMonth = maxDateFirstDayOfMonth;
      canPullUp = false;
    }

    const viewData = [firstDayOfMonth];
    const num = 5;
    let len = maxDate ? Math.abs(differenceInCalendarMonths(firstDayOfMonth, maxDate)) : num;
    len = len >= num ? num : len;

    for (let i = 1; i < len; i++) {
      viewData.push(addMonths(firstDayOfMonth, i));
    }

    this.setState({
      value,
      tmpValue: value,
      viewData,
      canPullDown,
      canPullUp,
    });
  }

  private setListInfo() {
    const elmCalendarMain = this.refs.calendarMain as HTMLDivElement;
    const views = elmCalendarMain && elmCalendarMain.querySelectorAll(`.${prefixCls}-month`);
    let height = 0;
    if (views && views.length > 0) {
      const listInfo = {};
      views.forEach((view, index) => {
        height += domUtils.height(view);
        listInfo[view.id] = { elm: view, height, index };
      });
      this.listInfo = listInfo;
    }
  }

  private scrollTo = () => {
    const { range } = this.props;
    const { tmpValue } = this.state;
    let date = tmpValue;

    if (range && Array.isArray(tmpValue) && tmpValue.length >= 0) {
      date = tmpValue[0];
    }
    if (this.listInfo && date && !Array.isArray(date)) {
      const info = this.listInfo[format(date, 'YYYYMM')];
      this.pullRefreshInstance && info && this.pullRefreshInstance.scrollToElement(info.elm, 100);
    }
  };
}

export default Calendar;
