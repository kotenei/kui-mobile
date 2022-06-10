import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PickerItemProps } from './typing';

class PickerItem extends PureComponent<PickerItemProps> {
  public render() {
    const { label, disabled, prefixCls, children, selected } = this.props;
    return (
      <li
        className={classnames({
          [`${prefixCls}__option`]: true,
          [`${prefixCls}__option--disabled`]: !!disabled,
          [`${prefixCls}__option--selected`]: !!selected,
        })}
        onClick={this.handleClick}
      >
        {label}
      </li>
    );
  }
  private handleClick = () => {
    const { onClick, value } = this.props;
    if (onClick) {
      onClick(value);
    }
  };
}

export default PickerItem;
