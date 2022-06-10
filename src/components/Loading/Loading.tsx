import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { LoadingProps } from './typing';

const prefixCls = 'k-loading';

class Loading extends PureComponent<LoadingProps> {
  public static defaultProps = {
    vertical: false,
  };
  public render() {
    const { className, color, tip, vertical, size, ...others } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--${color}`]: !!color,
      [`${prefixCls}--${size}`]: !!size,
      [`${prefixCls}--vertical`]: !!vertical,
    });
    return (
      <div {...others} className={classString}>
        <span className={`${prefixCls}__circle`}>
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" />
          </svg>
        </span>
        <span className={`${prefixCls}__tip`}>{tip}</span>
      </div>
    );
  }
}

export default Loading;
