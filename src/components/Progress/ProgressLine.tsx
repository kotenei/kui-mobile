import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { ProgressProps } from './typing';

interface ProgressLineProps extends ProgressProps {
  prefixCls: string;
}

class ProgressLine extends PureComponent<ProgressLineProps> {
  public renderIcon() {
    const { status, percent } = this.props;

    if (status) {
      if (status === 'success') {
        if (percent !== undefined) {
          if (percent >= 100) {
            return <Icon type="check-circle" theme="filled" color="primary" />;
          }
          return `${percent}%`;
        }
      }
      if (status === 'error') {
        return <Icon type="close-circle" theme="filled" color="danger" />;
      }
    }
    return null;
  }
  public renderText() {
    const { prefixCls, textInside, percent, showText, indeterminate } = this.props;
    if (textInside || !showText || indeterminate) {
      return null;
    }
    return <span className={`${prefixCls}__text`}>{this.renderIcon() || `${percent}%`}</span>;
  }
  public renderInner() {
    const {
      prefixCls,
      textInside,
      percent,
      indeterminate,
      color,
      showText,
      nativeColor,
    } = this.props;
    if (indeterminate) {
      return null;
    }
    const innerText = textInside && showText && (
      <span className={`${prefixCls}__innerText`}>{percent}%</span>
    );
    return (
      <div
        className={classnames({
          [`${prefixCls}__inner`]: true,
          // [`${prefixCls}__inner--${color}`]: !!color,
        })}
        style={{ width: `${percent}%`, background: nativeColor }}
      >
        {innerText}
      </div>
    );
  }
  public renderIndeterminate() {
    const { indeterminate, prefixCls, color, nativeColor } = this.props;
    if (!indeterminate) {
      return;
    }
    const firstClass = classnames({
      [`${prefixCls}__inner`]: true,
      [`${prefixCls}__inner--indeterminate1`]: true,
      // [`${prefixCls}__inner--${color}`]: !!color,
    });
    const secondClass = classnames({
      [`${prefixCls}__inner`]: true,
      [`${prefixCls}__inner--indeterminate2`]: true,
      // [`${prefixCls}__inner--${color}`]: !!color,
    });
    return (
      <React.Fragment>
        <div className={firstClass} style={{ background: nativeColor }} />
        <div className={secondClass} style={{ background: nativeColor }} />
      </React.Fragment>
    );
  }
  public render() {
    const { prefixCls, strokeWidth, showText, indeterminate } = this.props;
    const classString = classnames({
      [`${prefixCls}__bar`]: true,
      [`${prefixCls}__bar--hideText`]: !showText || indeterminate,
    });
    return (
      <React.Fragment>
        <div className={classString}>
          <div className={`${prefixCls}__outer`} style={{ height: strokeWidth }}>
            {this.renderInner()}
            {this.renderIndeterminate()}
          </div>
        </div>
        {this.renderText()}
      </React.Fragment>
    );
  }
}

export default ProgressLine;
