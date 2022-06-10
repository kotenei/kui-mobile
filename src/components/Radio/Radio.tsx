import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { RadioProps, RadioState } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-radio';

class Radio extends PureComponent<RadioProps, RadioState> {
  public static displayName = 'Radio';
  public static defaultProps = {
    circle: true,
  };
  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('checked' in nextProps) {
      return {
        checked: nextProps.checked,
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked,
    };
  }
  public render() {
    const { className, disabled, circle, children } = this.props;
    const { checked } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: !!disabled,
        [`${prefixCls}--checked`]: checked,
      },
      className,
    );
    return (
      <div className={classString}>
        <div
          className={classnames({
            [`${prefixCls}__icon`]: true,
            [`${prefixCls}__icon--circle`]: !!circle,
          })}
          onClick={this.handleClick}
        >
          {checked ? <Icon type="check" /> : null}
        </div>
        {children && (
          <div className={`${prefixCls}__label`} onClick={this.handleClick}>
            {children}
          </div>
        )}
      </div>
    );
  }
  private handleClick = () => {
    const { value, onChange, disabled } = this.props;
    const { checked } = this.state;
    if (disabled) {
      return;
    }
    if (onChange) {
      onChange(value !== undefined ? value : checked ? 'true' : 'false');
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: true,
      });
    }
  };
}

export default Radio;
