import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { TabContentProps, TabContentState } from './typing';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-tabs__content';

class TabContent extends PureComponent<TabContentProps, TabContentState> {
  private isVertical: boolean;
  private elContent: HTMLDivElement;
  private info: any;

  constructor(props) {
    super(props);
    this.state = {
      scrollLeft: 0,
    };
    this.isVertical = props.tabPosition === 'left' || props.tabPosition === 'right';
  }
  public componentDidMount() {
    this.setTabContentInfo();
    this.scrollTo();
  }
  public componentWillReceiveProps(nextProps) {
    this.isVertical = nextProps.tabPosition === 'left' || nextProps.tabPosition === 'right';
    if (
      this.props.tabPosition !== nextProps.tabPosition ||
      (Array.isArray(this.props.children) &&
        Array.isArray(nextProps.children) &&
        this.props.children.length !== nextProps.children.length)
    ) {
      setTimeout(() => {
        this.setTabContentInfo();
        this.scrollTo(nextProps.activeIndex);
      }, 100);
    } else if (this.props.activeIndex !== nextProps.activeIndex) {
      this.scrollTo(nextProps.activeIndex);
    }
  }
  public render() {
    const { children, activeIndex } = this.props;
    const { scrollLeft } = this.state;
    return (
      <div className={prefixCls} ref={this.handlRef} style={{ marginLeft: -scrollLeft }}>
        {React.Children.map(children, (child: any, index: number) => {
          if (child) {
            return React.cloneElement(child, {
              ...child.props,
              isActive: index === activeIndex,
            });
          }
        })}
      </div>
    );
  }
  private handlRef = (el: HTMLDivElement) => {
    this.elContent = el;
  };
  private setTabContentInfo() {
    const { children } = this.props;
    const width = domUtils.outerWidth(this.elContent),
      totalWidth = (Array.isArray(children) && children.length * width) || 0;

    this.info = {
      width,
      totalWidth,
    };
  }
  private scrollTo(index?) {
    const { children, activeIndex, tabPosition } = this.props;
    const max = (Array.isArray(children) && children.length - 1) || 0;
    let scrollLeft = 0;
    index = index !== undefined ? index : activeIndex;
    if (index < 0) {
      index = 0;
    }
    if (index > max) {
      index = max;
    }
    scrollLeft = index * this.info.width;
    if (this.isVertical) {
      scrollLeft = 0;
    }
    this.setState({
      scrollLeft,
    });
  }
}

export default TabContent;
