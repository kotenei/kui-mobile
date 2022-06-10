import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { TabNavItemProps } from './typing';

const prefixCls = 'k-tabs-nav__item';

class TabItem extends PureComponent<TabNavItemProps> {
  public render() {
    const { children, isActive, disabled } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--active`]: isActive,
      [`${prefixCls}--disabled`]: disabled,
    });
    return (
      <li className={classString} onClick={this.handleClick}>
        {children}
      </li>
    );
  }
  private handleClick = e => {
    const { onClick, index, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick(index);
    }
  };
}

export default TabItem;
