import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { ButtonProps } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-button';

class Button extends PureComponent<ButtonProps> {
  public static displayName = 'Button';
  public static defaultProps = {
    disabled: false,
    type: 'button',
  };
  public render() {
    const {
      color,
      icon,
      active,
      disabled,
      type,
      className,
      children,
      size,
      full,
      ...others
    } = this.props;

    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--${size}`]: !!size,
        [`${prefixCls}--active`]: !!active,
        [`${prefixCls}--disabled`]: !!disabled,
        [`${prefixCls}--full`]: !!full,
      },
      className,
    );

    return (
      <button type={type} className={classString} {...others}>
        {icon ? <Icon type={icon} /> : null}
        {children}
      </button>
    );
  }
}

export default Button;
