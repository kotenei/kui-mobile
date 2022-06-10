import React, { PureComponent } from 'react';
import classnames from 'classnames';
import omit from 'object.omit';
import { IconProps } from './typing';
import { icons as outline } from './outline';
import { icons as filled } from './filled';
import SvgIcon from './SvgIcon';

const prefixCls = 'k-icon';

export default class Icon extends PureComponent<IconProps> {
  public static displayName = 'Icon';
  public static defaultProps = {
    theme: 'outline',
    viewBox: '0 0 1024 1024',
  };
  public renderIcon() {
    const { theme, type, children, color } = this.props;
    let presetIcon;
    if (theme && type) {
      switch (theme) {
        case 'outline':
          presetIcon = outline[type];
          break;
        case 'filled':
          presetIcon = filled[type];
          break;
        default:
          break;
      }
    }
    if (presetIcon) {
      return (
        <SvgIcon viewBox={presetIcon.viewBox} color={color}>
          {presetIcon.path}
        </SvgIcon>
      );
    }
    return children;
  }
  public render() {
    const { children, className, spin, color, type, style, fontSize, ...others } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--spin`]: spin || type === 'loading',
      },
      className,
    );
    const _style = {
      fontSize,
      ...style,
    };
    return (
      <i className={classString} {...others} style={_style}>
        {this.renderIcon()}
      </i>
    );
  }
}
