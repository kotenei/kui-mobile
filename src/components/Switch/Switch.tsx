import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { SwitchProps, SwitchState } from './typing';

const prefixCls = 'k-switch';

class Switch extends PureComponent<SwitchProps, SwitchState> {
  public static defaultProps = {
    defaultChecked: false,
    disabled: false,
    loading: false,
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
    const checked = props.checked || props.defaultChecked;
    this.state = {
      checked,
    };
  }

  public renderInner() {
    const { checkedContent, unCheckedContent } = this.props;
    const { checked } = this.state;
    if (checked) {
      return checkedContent;
    } else {
      return unCheckedContent;
    }
  }
  public render() {
    const { disabled, loading } = this.props;
    const { checked } = this.state;
    const classString = classnames({
      [`${prefixCls}`]: true,
      [`${prefixCls}--checked`]: checked,
      [`${prefixCls}--disabled`]: !!disabled,
      [`${prefixCls}--loading`]: !!loading,
    });
    return (
      <div className={classString} onClick={this.handleChange}>
        <span className={`${prefixCls}__inner`}>
          {this.renderInner()}
          <span className={`${prefixCls}__dot`}>{loading ? <Icon type="loading" /> : null}</span>
        </span>
      </div>
    );
  }
  private handleChange = () => {
    const { checked } = this.state;
    const { onChange } = this.props;
    const newChecked = !checked;
    if (!('checked' in this.props)) {
      this.setState({
        checked: newChecked,
      });
    }
    if (onChange) {
      onChange(newChecked);
    }
  };
}

export default Switch;
