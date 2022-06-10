import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { ProgressProps } from './typing';
import { Icon } from '../Icon';

interface ProgressCircleProps extends ProgressProps {
  prefixCls: string;
}

class ProgressCircle extends PureComponent<ProgressCircleProps> {
  public renderIcon() {
    const { status } = this.props;
    const fontSize = this.getFontSize();
    const percent = this.props.percent || 0;
    if (status) {
      if (status === 'success') {
        if (percent >= 100) {
          return <Icon type="check" fontSize={fontSize} color="success" />;
        }
        return `${percent}%`;
      }
      if (status === 'error') {
        return <Icon type="close" fontSize={fontSize} color="danger" />;
      }
    }
    return null;
  }
  public render() {
    const { prefixCls, width, status, percent, text, nativeColor } = this.props;
    const d = this.trackPath();
    const circlePathStyle = this.circlePathStyle();
    const stroke = this.stroke();
    const strokeWidth = this.relativeStrokeWidth();
    const fontSize = this.getFontSize();
    return (
      <div className={`${prefixCls}__circle`} style={{ width, height: width, fontSize }}>
        <svg viewBox="0 0 100 100">
          <path className={`${prefixCls}__track`} d={d} fill="none" strokeWidth={strokeWidth} />
          <path
            className={classnames({
              [`${prefixCls}__path`]: true,
              [`${prefixCls}__path--success`]: status === 'success',
              [`${prefixCls}__path--danger`]: status === 'error',
            })}
            d={d}
            strokeLinecap="round"
            fill="none"
            strokeWidth={strokeWidth}
            style={circlePathStyle}
          />
        </svg>
        <div className={`${prefixCls}__text`}>{this.renderIcon() || text || `${percent}%`}</div>
      </div>
    );
  }
  private relativeStrokeWidth() {
    const { strokeWidth, width } = this.props;
    return strokeWidth !== undefined && width !== undefined
      ? ((strokeWidth / width) * 100).toFixed(1)
      : '0';
  }
  private trackPath() {
    const strokeWidth = this.relativeStrokeWidth();
    const radius = parseInt(String(50 - parseFloat(strokeWidth) / 2), 10);
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius *
      2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
  }
  private perimeter() {
    const strokeWidth = this.relativeStrokeWidth();
    const radius = 50 - parseFloat(strokeWidth) / 2;
    return 2 * Math.PI * radius;
  }
  private circlePathStyle() {
    const { percent, nativeColor } = this.props;
    const perimeter = this.perimeter();
    return {
      strokeDasharray: `${perimeter}px,${perimeter}px`,
      strokeDashoffset: (1 - (percent || 0) / 100) * perimeter + 'px',
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease',
      stroke: nativeColor,
    };
  }
  private stroke() {
    const { color } = this.props;
    let ret;
    switch (this.props.status) {
      case 'success':
        ret = '#4caf50';
        break;
      case 'error':
        ret = '#f44336';
        break;
      default:
        ret = '#2196f3';
    }

    return color || ret;
  }
  private getFontSize() {
    const { width } = this.props;
    return (width || 0) * 0.16 + 6;
  }
}

export default ProgressCircle;
