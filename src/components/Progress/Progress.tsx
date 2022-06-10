import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { ProgressProps } from './typing';
import ProgressLine from './ProgressLine';
import ProgressCircle from './ProgressCircle';

const prefixCls = 'k-progress';

class Progress extends PureComponent<ProgressProps> {
  public static defaultProps = {
    percent: 0,
    type: 'line',
    strokeWidth: 6,
    textInside: false,
    showText: true,
    width: 100,
    indeterminate: false,
  };
  public renderContainer() {
    const { type } = this.props;
    switch (type) {
      case 'line':
        return <ProgressLine prefixCls={prefixCls} {...this.props} />;
      case 'circle':
        return <ProgressCircle prefixCls={prefixCls} {...this.props} />;
      default:
        return null;
    }
  }
  public render() {
    const { type, textInside, className, color } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--textInside`]: textInside,
        [`${prefixCls}--${type}`]: type !== undefined,
        [`${prefixCls}--${color}`]: !!color,
      },
      className,
    );

    return <div className={classString}>{this.renderContainer()}</div>;
  }
}

export default Progress;
