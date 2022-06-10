import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { InputNumberProps, InputNumberState } from './typing';
import { Icon } from '../Icon';
import { Button } from '../Button';
import { Input } from '../Input';

const prefixCls = 'k-inputnumber';

class InputNumber extends PureComponent<InputNumberProps, InputNumberState> {
  public static defaultProps = {
    min: 0,
    max: 10,
    step: 1,
    defaultValue: 0,
  };
  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('value' in nextProps) {
      const { min, max } = nextProps;
      let newValue = nextProps.value;
      if (newValue <= min) {
        newValue = min;
      }
      if (newValue >= max) {
        newValue = max;
      }
      return {
        value: newValue,
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue,
    };
  }
  public render() {
    const { className, style, disabled, disableInput, min, max } = this.props;
    const { value } = this.state;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--disabled`]: !!disabled,
    });
    return (
      <div className={classString} style={style}>
        <Button
          size="sm"
          className={`${prefixCls}__minus`}
          onClick={this.handleMinus}
          disabled={value.toString() === '' || value === min || disabled}
        >
          <Icon type="minus" />
        </Button>
        <input
          className={`${prefixCls}__input`}
          type="number"
          value={value}
          disabled={disabled}
          onChange={this.handleChange}
        />
        <Button
          size="sm"
          className={`${prefixCls}__plus`}
          onClick={this.handlePlus}
          disabled={value === max || disabled}
        >
          <Icon type="plus" />
        </Button>
      </div>
    );
  }

  private handleMinus = () => {
    const { value } = this.state;
    const { step, min, onChange, disabled } = this.props;
    let newValue = value - step;
    if (disabled) {
      return;
    }
    if (newValue <= min) {
      newValue = min;
    }
    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
      });
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  private handlePlus = () => {
    const { value } = this.state;
    const { step, max, onChange, disabled } = this.props;
    let newValue = value + step;
    if (disabled) {
      return;
    }
    if (newValue >= max) {
      newValue = max;
    }
    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
      });
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  private handleChange = e => {
    const { target } = e;
    const { onChange, min, max, disabled } = this.props;
    const { value } = this.state;
    let newValue = target.value.trim();
    if (disabled) {
      return;
    }

    if (newValue && this.isNumber(newValue)) {
      newValue = Number(newValue);
      if (newValue <= min) {
        newValue = min;
      }
      if (newValue >= max) {
        newValue = max;
      }
    } else {
      newValue = '';
    }

    if (!('value' in this.props)) {
      this.setState({
        value: newValue,
      });
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  private isNumber(value: string) {
    return !Number.isNaN(Number(value));
  }
}

export default InputNumber;
