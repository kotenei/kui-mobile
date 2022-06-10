import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { SliderHandleProps } from './typing';

const prefixCls = 'k-slider-handle';

class SliderHandle extends PureComponent<SliderHandleProps> {
  public render() {
    const { title, style, disabled } = this.props;
    return (
      <div
        className={`${prefixCls}`}
        style={style}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      />
    );
  }
  private handleTouchStart = e => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const { onStart, value, disabled } = this.props;
    const { target } = e;
    if (disabled) {
      return;
    }

    if (onStart) {
      onStart(e, value);
    }
  };

  private handleTouchMove = e => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const { onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(e);
    }
  };

  private handleTouchEnd = e => {
    const { onEnd, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onEnd) {
      onEnd(e);
    }
  };
}

export default SliderHandle;
