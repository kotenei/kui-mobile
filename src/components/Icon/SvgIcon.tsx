import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { SvgIconProps } from './typing';

const prefixCls = 'k-icon-svg';

export default class SvgIcon extends PureComponent<SvgIconProps> {
  public static defaultProps = {
    viewBox: '0 0 1024 1024',
  };
  public render() {
    const {
      children,
      className,
      fontSize,
      viewBox,
      title,
      color,
      nativeColor,
      style,
      ...others
    } = this.props;
    const _style = {
      fontSize,
      ...style,
    };
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
      },
      className,
    );

    return (
      <svg
        className={classString}
        focusable="false"
        viewBox={viewBox}
        color={nativeColor}
        aria-hidden={title ? 'false' : 'true'}
        style={_style}
        {...others}
      >
        {title && <title>{title}</title>}
        {children}
      </svg>
    );
  }
}
