import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { RateItemProps } from './typing';

const prefixCls = 'k-rate-star';

class RateItem extends PureComponent<RateItemProps> {
  public static defaultProps = {
    value: -1,
    current: -1,
  };

  public render() {
    const { value, current, character, allowHalf } = this.props;
    const classString = classnames({
      [`${prefixCls}`]: true,
      [`${prefixCls}--half`]: current === value - 0.5 && !!allowHalf,
      [`${prefixCls}--full`]: current >= value && value.toString().indexOf('.') === -1,
    });

    return (
      <li className={classString}>
        <div
          className={`${prefixCls}__item ${prefixCls}__first`}
          data-value={allowHalf ? value - 0.5 : value}
          onClick={this.handleFirstClick}
        >
          {character}
        </div>
        <div
          className={`${prefixCls}__item ${prefixCls}__second`}
          data-value={value}
          onClick={this.handleSecondClick}
        >
          {character}
        </div>
      </li>
    );
  }

  private handleFirstClick = e => {
    const { allowHalf, value, onClick } = this.props;
    const newValue = allowHalf ? value - 0.5 : value;
    if (onClick) {
      onClick(newValue);
    }
  };

  private handleSecondClick = e => {
    const { value, onClick } = this.props;
    if (onClick) {
      onClick(value);
    }
  };
}

export default RateItem;
