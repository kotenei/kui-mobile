import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { RateProps, RateState } from './typing';
import RateItem from './RateItem';
import { Icon } from '../Icon';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-rate';

class Rate extends PureComponent<RateProps, RateState> {
  public static defaultProps = {
    allowHalf: false,
    count: 5,
    character: <Icon type="star" theme="filled" />,
    defaultValue: 0,
    disabled: false,
  };

  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
        orgValue: nextProps.value,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    let value = props.defaultValue;
    if ('value' in props) {
      value = props.value;
    }
    this.state = {
      value,
      orgValue: value,
    };
  }

  public renderStars() {
    const { count, character, allowHalf, disabled } = this.props;
    const { value } = this.state;
    const items: any = [];
    if (count !== undefined) {
      for (let i = 0; i < count; i++) {
        items.push(
          <RateItem
            key={i}
            current={value}
            value={i + 1}
            character={character}
            allowHalf={allowHalf}
            onClick={this.handleStarClick}
          />,
        );
      }
    }

    return items;
  }

  public render() {
    const { disabled, style, className } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: !!disabled,
      },
      className,
    );
    return (
      <ul className={classString} style={style} onTouchMove={this.handleTouchMove}>
        {this.renderStars()}
      </ul>
    );
  }

  private handleStarClick = value => {
    const { onChange, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({
        value,
        orgValue: value,
      });
    }
    if (onChange) {
      onChange(value);
    }
  };

  private handleTouchMove = e => {
    const { disabled, onChange } = this.props;

    if (disabled || !document.elementFromPoint) {
      return;
    }
    e.preventDefault();
    const { clientX, clientY } = e.touches[0];
    const target = document.elementFromPoint(clientX, clientY) as HTMLElement;

    if (target) {
      let value;
      if (target.dataset) {
        value = target.dataset.value;
      }
      if (value === undefined) {
        const elms = domUtils.parents(target, '.k-rate-star__item');
        if (elms.length > 0 && elms[0].dataset) {
          value = elms[0].dataset.value;
        }
      }
      if (value !== undefined && /^\d+(\.\d*)?$/.test(value)) {
        const newValue = Number(value);
        this.setState({
          value: newValue,
        });

        if (onChange) {
          onChange(newValue);
        }
      }
    }
  };
}

export default Rate;
