import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { TabBarProps, TabBarState } from './typing';

const prefixCls = 'k-tabbar';

class TabBar extends PureComponent<TabBarProps, TabBarState> {
  public static defaultProps = {
    activeColor: '#2196f3',
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: [],
    };
  }
  public renderContent() {
    const { children, activeColor } = this.props;
    return React.Children.map(children, (child: any, index) => {
      if (child && child.type && child.type.displayName === 'TabBarItem') {
        const { selected, style, id } = child.props;
        const _style = { ...style, color: selected && activeColor };
        return React.cloneElement(child, {
          ...child.props,
          id: id || index,
          style: _style,
        });
      }
      return null;
    });
  }
  public render() {
    const { className, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return <div className={classString}>{this.renderContent()}</div>;
  }
}

export default TabBar;
