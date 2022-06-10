import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { TabNavProps, TabNavState } from './typing';
import TabNavItem from './TabNavItem';
import domUtils from '../../utils/domUtils';
import { Scroller } from '../Scroller';
const prefixCls = 'k-tabs-nav';

class TabNav extends PureComponent<TabNavProps, TabNavState> {
  private isVertical: boolean;
  private tabsInfo: any;
  private elScroller: HTMLElement;
  private timeout: number;
  private scrollInstance: any = null;
  private orgScrollInfo: any = { x: 0, y: 0, scrollLeft: 0, scrollTop: 0 };
  private isTouch: boolean = false;

  constructor(props) {
    super(props);
    this.state = {
      scrollLeft: 0,
      scrollTop: 0,
      inkHeight: 0,
      inkWidth: 0,
      inkLeft: 0,
      inkTop: 0,
      scrolling: false,
    };
    this.isVertical = props.tabPosition === 'left' || props.tabPosition === 'right';
  }
  public componentDidMount() {
    this.setTabsInfo();
    if (
      (!this.isVertical && this.tabsInfo.totalWidth > this.tabsInfo.scrollWidth) ||
      (this.isVertical && this.tabsInfo.totalHeight > this.tabsInfo.scrollHeight)
    ) {
      this.setState(
        {
          scrolling: true,
        },
        () => {
          this.setTabsInfo();
          this.scrollTo();
        },
      );
    } else {
      this.scrollTo();
    }
  }
  public componentWillReceiveProps(nextProps) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.isVertical = nextProps.tabPosition === 'left' || nextProps.tabPosition === 'right';
    if (
      this.props.tabPosition !== nextProps.tabPosition ||
      (Array.isArray(this.props.children) &&
        Array.isArray(nextProps.children) &&
        this.props.children.length !== nextProps.children.length)
    ) {
      const { totalWidth, totalHeight, count } = this.tabsInfo;
      const { scrollLeft, scrollTop } = this.state;
      this.timeout = setTimeout(() => {
        this.setTabsInfo();
        if (
          (!this.isVertical && this.tabsInfo.totalWidth > this.tabsInfo.scrollWidth) ||
          (this.isVertical && this.tabsInfo.totalHeight > this.tabsInfo.scrollHeight)
        ) {
          this.setState({
            scrolling: true,
          });
        } else {
          this.setState({
            scrolling: false,
            scrollLeft: 0,
            scrollTop: 0,
          });
        }
        setTimeout(() => {
          this.setTabsInfo();
          if (count > nextProps.panels.length) {
            const lastIndex = this.tabsInfo.count - 1,
              el = this.tabsInfo.tabs[lastIndex],
              offset = domUtils.offset(el);
            let num;
            if (this.isVertical) {
              const th = offset.top + this.tabsInfo.arrHeight[lastIndex],
                nh = this.tabsInfo.scrollOffset.top + this.tabsInfo.scrollHeight;
              if (th < nh) {
                num = th - nh - domUtils.css(el, 'marginBottom', true) + scrollTop;
                this.setState({
                  scrollTop: num,
                });
              }
            } else {
              const tw = offset.left + this.tabsInfo.arrWidth[lastIndex],
                nw = this.tabsInfo.scrollOffset.left + this.tabsInfo.scrollWidth;
              if (tw < nw) {
                num = tw - nw - domUtils.css(el, 'marginRight', true) + scrollLeft;
                this.setState({
                  scrollLeft: num,
                });
              }
            }
          } else {
            this.scrollTo(nextProps.activeIndex);
          }
        }, 100);
      }, 100);
    } else if (this.props.activeIndex !== nextProps.activeIndex) {
      this.scrollTo(nextProps.activeIndex);
    }
  }
  public renderTabsContainer() {
    const { type } = this.props;
    const { inkTop, inkLeft, inkWidth, inkHeight, scrollLeft, scrolling, scrollTop } = this.state;
    let navStyle;
    let inkStyle;
    if (this.isVertical) {
      navStyle = { transform: `translate3d(0px, -${scrollTop}px, 0px)` };
      inkStyle = { height: inkHeight, transform: `translate3d(0px, ${inkTop}px, 0px)` };
    } else {
      navStyle = { transform: `translate3d(-${scrollLeft}px, 0px, 0px)` };
      inkStyle = { width: inkWidth, transform: `translate3d(${inkLeft}px, 0px, 0px)` };
    }

    if (this.isTouch) {
      navStyle.transition = 'none';
    }

    return (
      <div
        className={classnames({
          [`${prefixCls}__container`]: true,
          [`${prefixCls}__container--scrolling`]: false,
        })}
      >
        <div className={`${prefixCls}__scroller`} ref={this.handlRef}>
          <ul
            className={`${prefixCls}__list`}
            style={navStyle}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          >
            {type === 'line' ? <li className={`${prefixCls}__ink`} style={inkStyle} /> : null}
            {this.getTabs()}
          </ul>
        </div>
      </div>
    );
  }
  public render() {
    const classString = classnames({
      [prefixCls]: true,
    });
    return <div className={classString}>{this.renderTabsContainer()}</div>;
  }

  private handlRef = (el: HTMLDivElement) => {
    this.elScroller = el;
  };

  private handleScrollerInit = instance => {
    this.scrollInstance = instance;
  };

  private handleTouchStart = e => {
    const { clientX, clientY } = e.touches[0];
    const { scrollLeft, scrollTop } = this.state;
    this.orgScrollInfo.x = clientX;
    this.orgScrollInfo.y = clientY;
    this.orgScrollInfo.scrollLeft = scrollLeft;
    this.orgScrollInfo.scrollTop = scrollTop;
    this.isTouch = true;
  };

  private handleTouchMove = e => {
    e.preventDefault();
    const { clientX, clientY } = e.touches[0];
    let left = this.orgScrollInfo.x - clientX;
    let top = this.orgScrollInfo.y - clientY;

    left += this.orgScrollInfo.scrollLeft;
    top += this.orgScrollInfo.scrollTop;

    if (left < 0) {
      left = 0;
    }
    if (top < 0) {
      top = 0;
    }

    left = left > this.tabsInfo.maxLeft ? this.tabsInfo.maxLeft : left;
    top = top > this.tabsInfo.maxHeight ? this.tabsInfo.maxHeight : top;

    if (this.isVertical) {
      this.setState({
        scrollTop: top,
      });
    } else {
      this.setState({
        scrollLeft: left,
      });
    }
  };

  private handleTouchEnd = e => {
    this.isTouch = false;
  };

  private getTabs() {
    const { children, onTabClick } = this.props;
    const { activeIndex } = this.props;
    const items: any = [];

    React.Children.map(children, (child: any, index: number) => {
      if (child) {
        const { tab, disabled } = child.props;
        items.push(
          <TabNavItem
            key={index}
            index={index}
            disabled={disabled}
            isActive={activeIndex === index}
            onClick={this.handleTabClick}
          >
            {tab}
          </TabNavItem>,
        );
      }
    });
    return items;
  }

  private handleTabClick = index => {
    const { onTabClick } = this.props;
    if (onTabClick) {
      onTabClick(index);
    }
  };

  private setTabsInfo() {
    const { activeIndex } = this.props;
    const scrollWidth = domUtils.outerWidth(this.elScroller);
    const scrollHeight = domUtils.outerHeight(this.elScroller);
    const tabs = this.elScroller.getElementsByClassName(`${prefixCls}__item`);

    this.tabsInfo = {
      arrHeight: [],
      arrWidth: [],
      arrLeft: [],
      arrTop: [],
      count: 0,
    };
    let left = 0,
      top = 0,
      totalWidth = 0,
      totalHeight = 0;

    for (let i = 0, w, h; i < tabs.length; i++) {
      w = domUtils.outerWidth(tabs[i], true);
      h = domUtils.outerHeight(tabs[i], true);
      totalWidth += w;
      totalHeight += h;
      this.tabsInfo.arrWidth.push(w);
      this.tabsInfo.arrHeight.push(h);
      this.tabsInfo.arrLeft.push(left);
      this.tabsInfo.arrTop.push(top);
      left += w;
      top += h;
    }
    this.tabsInfo.tabs = tabs;
    this.tabsInfo.maxLeft = totalWidth - scrollWidth;
    this.tabsInfo.maxHeight = totalHeight - scrollHeight;
    this.tabsInfo.count = tabs.length;
    this.tabsInfo.totalWidth = totalWidth;
    this.tabsInfo.totalHeight = totalHeight;
    this.tabsInfo.scrollWidth = scrollWidth;
    this.tabsInfo.scrollHeight = scrollHeight;
    this.tabsInfo.scrollOffset = domUtils.offset(this.elScroller);
  }

  private scrollTo(index?) {
    const { children, activeIndex } = this.props;
    const max = Array.isArray(children) ? children.length - 1 : 0;
    index = index !== undefined ? index : activeIndex;
    if (index < 0) {
      index = 0;
    }
    if (index > max) {
      index = max;
    }
    if (this.isVertical) {
      this.verticalScroll(index);
    } else {
      this.horizontalScroll(index);
    }
  }

  // 水平滚动
  private horizontalScroll(index) {
    const { scrollLeft } = this.state;
    const { type } = this.props;
    const el = this.tabsInfo.tabs[index],
      offset = domUtils.offset(el),
      position = domUtils.position(el),
      ew = this.tabsInfo.arrWidth[index],
      tw = offset.left - this.tabsInfo.scrollOffset.left + this.tabsInfo.arrWidth[index],
      nw = this.tabsInfo.scrollWidth,
      half = nw / 2;
    let left;

    if (tw >= half) {
      left = tw - half + scrollLeft;
      if (left >= this.tabsInfo.maxLeft) {
        left = this.tabsInfo.maxLeft;
      }
    } else {
      left = scrollLeft - this.tabsInfo.arrWidth[index];
      if (left <= 0) {
        left = 0;
      }
    }

    if (left !== undefined) {
      this.setState({
        scrollLeft: left,
      });
    }
    this.setState({
      inkLeft: position.left,
      inkWidth: ew,
    });
  }

  // 垂直滚动
  private verticalScroll(index) {
    const { scrollTop } = this.state;
    const el = this.tabsInfo.tabs[index],
      offset = domUtils.offset(el),
      position = domUtils.position(el),
      eh = this.tabsInfo.arrHeight[index],
      th = offset.top - this.tabsInfo.scrollOffset.top + this.tabsInfo.arrHeight[index],
      nh = this.tabsInfo.scrollHeight,
      half = nh / 2;

    let top;

    if (th >= half) {
      top = th - half + scrollTop;
      if (top >= this.tabsInfo.maxHeight) {
        top = this.tabsInfo.maxHeight;
      }
    } else {
      top = scrollTop - this.tabsInfo.arrHeight[index];
      if (top <= 0) {
        top = 0;
      }
    }

    if (top !== undefined) {
      this.setState({
        scrollTop: top,
      });
    }
    this.setState({
      inkTop: position.top,
      inkHeight: eh,
    });
  }
}

export default TabNav;
