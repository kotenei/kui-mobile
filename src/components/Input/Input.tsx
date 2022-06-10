import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { InputProps, InputState } from './typing';
import { Icon } from '../Icon';
import { Cell } from '../Cell';

const prefixCls = 'k-input';

class Input extends PureComponent<InputProps, InputState> {
  public static defaultProps = {
    type: 'text',
    disabled: false,
  };

  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || '',
    };
  }
  public componentDidMount() {
    this.adpHeight();
  }

  public renderInput() {
    const {
      type,
      placeholder,
      prefix,
      suffix,
      disabled,
      extra,
      defaultValue,
      onFocus,
      onBlur,
      ...others
    } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <div className={`${prefixCls}__wrap`}>
          {prefix && <span className={`${prefixCls}__prefix`}>{prefix}</span>}
          <input
            {...others}
            type={type}
            className={`${prefixCls}__control`}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={this.handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {suffix && <span className={`${prefixCls}__suffix`}>{suffix}</span>}
        </div>
        <div className={`${prefixCls}__extra`}>{extra}</div>
      </React.Fragment>
    );
  }
  public renderTextArea() {
    const { onFocus, onBlur } = this.props;
    return (
      <div className={`${prefixCls}__wrap`}>
        <textarea
          ref="textarea"
          className={`${prefixCls}__control`}
          rows={1}
          onChange={this.handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    );
  }
  public render() {
    const { label, type, className } = this.props;
    return (
      <Cell
        className={classnames(
          {
            [prefixCls]: true,
          },
          className,
        )}
        title={label}
        value={type !== 'textarea' ? this.renderInput() : this.renderTextArea()}
      />
    );
  }

  private adpHeight = () => {
    const el = this.refs.textarea as HTMLElement;
    if (el) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + 'px';
    }
  };

  private handleChange = e => {
    const { target } = e;
    const { onChange, type } = this.props;
    const value = target.value;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
      if (type === 'textarea') {
        this.adpHeight();
      }
    }
    if (onChange) {
      onChange(value);
    }
  };
}

export default Input;
