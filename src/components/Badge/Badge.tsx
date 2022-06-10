import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { BadgeProps } from './typing';

const prefixCls = 'k-badge';

class Badge extends PureComponent<BadgeProps> {
  public static defaultProps = {
    color: 'primary',
    dot: false,
    overflowCount: 99,
  };
  public renderText() {
    const { dot, overflowCount, text } = this.props;

    if (dot) {
      return <sup className={`${prefixCls}__sup ${prefixCls}__dot`} />;
    }

    if (text !== undefined && text !== null) {
      let content = text;
      if (typeof text === 'number') {
        if (overflowCount !== undefined && text > overflowCount) {
          content = overflowCount + '+';
        }
      }
      return <sup className={`${prefixCls}__sup ${prefixCls}__text`}>{content}</sup>;
    }

    return null;
  }
  public render() {
    const { children, className, color } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${color}`]: !!color,
        [`${prefixCls}--notwrap`]: !children,
      },
      className,
    );
    return (
      <span className={classString}>
        {children}
        {this.renderText()}
      </span>
    );
  }
}

export default Badge;
