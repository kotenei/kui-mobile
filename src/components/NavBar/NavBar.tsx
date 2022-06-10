import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { NavBarProps } from './typing';

const prefixCls = 'k-navbar';

class NavBar extends PureComponent<NavBarProps> {
  public static defaultProps = {
    mode: 'light',
  };
  public render() {
    const { children, className, style, mode, leftContent, rightContent, icon } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${mode}`]: !!mode,
      },
      className,
    );
    return (
      <div className={classString} style={style}>
        <div className={`${prefixCls}__left`} onClick={this.handleRightClick}>
          <span className={`${prefixCls}__icon`}>{icon}</span>
          {leftContent}
        </div>
        <div className={`${prefixCls}__middle`}>{children}</div>
        <div className={`${prefixCls}__right`} onClick={this.handleRightClick}>
          {rightContent}
        </div>
      </div>
    );
  }
  private handleLeftClick = e => {
    const { onLeftClick } = this.props;
    if (onLeftClick) {
      onLeftClick();
    }
  };
  private handleRightClick = e => {
    const { onRightClick } = this.props;
    if (onRightClick) {
      onRightClick();
    }
  };
}

export default NavBar;
