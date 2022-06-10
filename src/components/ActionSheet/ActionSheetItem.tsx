import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { ActionSheetItemProps } from './typing';
import { Icon } from '../Icon';

class ActionSheetItem extends PureComponent<ActionSheetItemProps> {
  public render() {
    const { prefixCls, disabled, loading, text, onClick } = this.props;
    return (
      <div
        className={classnames({
          [`${prefixCls}__item`]: true,
          [`${prefixCls}__item--disabled`]: !!disabled,
        })}
        onClick={this.handleClick}
      >
        {text && !loading && <div className={`${prefixCls}__text`}>{text}</div>}
        {loading && <Icon className={`${prefixCls}__loading`} type="loading" />}
      </div>
    );
  }
  private handleClick = () => {
    const { index, onClick, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick(index);
    }
  };
}

export default ActionSheetItem;
