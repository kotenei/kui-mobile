import React, { PureComponent } from 'react';
import classnames from 'classnames';
import omit from 'object.omit';
import TabNav from './TabNav';
import TabContent from './TabContent';
import { TabsProps, TabsState } from './typing';

const prefixCls = 'k-tabs';

class Tabs extends PureComponent<TabsProps, TabsState> {
  public static defaultProps = {
    defaultActiveIndex: 0,
    tabPosition: 'top',
    type: 'line',
  };
  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('activeIndex' in nextProps) {
      return {
        activeIndex: nextProps.activeIndex,
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || props.defaultActiveIndex,
    };
  }
  public componentDidMount() {
    const { activeIndex } = this.state;
    const { children } = this.props;
    let hasMatch = false;
    React.Children.map(children, (child: any, index: number) => {
      if (child) {
        const { disabled } = child.props;
        if (disabled && index === activeIndex) {
          hasMatch = true;
        }
      }
    });
    if (hasMatch) {
      this.setState({
        activeIndex: 0,
      });
    }
  }
  public renderTabNav() {
    const { children } = this.props;
    const { activeIndex } = this.state;
    if (!children) {
      return null;
    }
    return (
      <TabNav {...this.props} activeIndex={activeIndex} onTabClick={this.handleTabClick}>
        {children}
      </TabNav>
    );
  }
  public renderTabContent() {
    const { children } = this.props;
    const { activeIndex } = this.state;
    if (!children) {
      return null;
    }
    return (
      <TabContent {...this.props} activeIndex={activeIndex}>
        {children}
      </TabContent>
    );
  }
  public render() {
    const { className, type, style, tabPosition } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--line`]: type === 'line',
      [`${prefixCls}--card`]: type === 'card',
      [`${prefixCls}--${tabPosition}`]: true,
      [`${prefixCls}--vertical`]: tabPosition === 'left' || tabPosition === 'right',
    });
    return (
      <div className={classString} style={style}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }

  private handleTabClick = index => {
    const { onTabClick } = this.props;
    if (!('activeIndex' in this.props)) {
      this.setState({
        activeIndex: index,
      });
    }
    if (onTabClick) {
      onTabClick(index);
    }
  };
}

export default Tabs;
