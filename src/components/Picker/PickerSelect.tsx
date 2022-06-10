import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PickerSelectProps, PickerSelectState, Column } from './typing';
import { Scroller } from '../Scroller';
import PickerItem from './PickerItem';
import domUtils from '../..//utils/domUtils';

const prefixCls = 'k-picker-select';

class PickerSelect extends React.Component<PickerSelectProps, PickerSelectState> {
  public static getDerivedStateFromProps(nextProps, nextState) {
    if ('value' in nextProps && nextProps.value !== nextState.value) {
      const { columns, value } = nextProps;
      let activeIndex = 0;
      if (columns !== undefined && value !== undefined) {
        const index = columns.findIndex(item => {
          return item.value === value;
        });
        if (index > -1) {
          activeIndex = index;
        }
      }
      return {
        value,
        activeIndex,
      };
    }
    return null;
  }

  private scrollInstance: any;
  private itemHeight: number;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.getActiveIndex(props),
      value: props.value,
    };
  }
  public renderItems() {
    const { columns } = this.props;
    const { activeIndex } = this.state;
    const items: any = [];
    if (columns && columns.length > 0) {
      columns.forEach((item: Column, index: number) => {
        items.push(
          <PickerItem
            key={index}
            prefixCls={prefixCls}
            {...item}
            selected={index === activeIndex}
          />,
        );
      });
    }
    return items;
  }

  public componentDidMount() {
    setTimeout(() => {
      this.init();
    });
  }

  public componentDidUpdate(prevProps, prevState) {
    if (
      prevState.activeIndex !== this.state.activeIndex &&
      this.scrollInstance &&
      this.scrollInstance.selectedIndex !== this.state.activeIndex
    ) {
      this.scrollInstance.selectedIndex = this.state.activeIndex;
      this.scrollInstance.wheelTo(this.state.activeIndex);
    }
  }

  public render() {
    const { activeIndex } = this.state;
    return (
      <Scroller
        probeType={3}
        className={`${prefixCls}__wheel`}
        wheel={{
          selectedIndex: activeIndex,
          wheelWrapperClass: prefixCls,
          wheelItemClass: `${prefixCls}__option`,
          wheelDisabledItemClass: `${prefixCls}__option--disabled`,
        }}
        onInit={this.handleScrollInit}
        onScrollEnd={this.handleScrollEnd}
      >
        <ul ref="select" className={`${prefixCls}`}>
          {this.renderItems()}
        </ul>
      </Scroller>
    );
  }

  private init() {
    const { columns, value } = this.props;
    if (columns && columns.length > 0) {
      const li = (this.refs.select as HTMLElement).querySelector('li');
      this.itemHeight = domUtils.height(li);
    }
  }

  private getActiveIndex(props = this.props) {
    const { columns, value } = props;
    let activeIndex = 0;
    if (columns !== undefined && value !== undefined) {
      const index = columns.findIndex(item => {
        return item.value === value;
      });
      if (index > -1) {
        activeIndex = index;
      }
    }
    return activeIndex;
  }

  private handleScrollInit = instance => {
    this.scrollInstance = instance;
  };

  private handleScrollEnd = pos => {
    const { onChange, columns, columnIndex } = this.props;
    const activeIndex = this.scrollInstance.getSelectedIndex();
    if (this.state.activeIndex === activeIndex) {
      return;
    }

    this.setState({
      activeIndex,
    });
    if (onChange && columns) {
      onChange(columns[activeIndex], columnIndex);
    }
  };
}

export default PickerSelect;
