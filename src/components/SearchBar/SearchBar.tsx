import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { SearchBarProps, SearchBarState } from './typing';
import { Input } from '../Input';
import { Icon } from '../Icon';
import omit from 'object.omit';

const prefixCls = 'k-searchbar';

class SearchBar extends PureComponent<SearchBarProps, SearchBarState> {
  public static defaultProps = {
    cancelText: '取消',
    disabled: false,
    showCancelButton: false,
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
      value: props.value || props.defaultValue,
    };
  }

  public renderCancelButton() {
    const { cancelText, showCancelButton } = this.props;
    return showCancelButton && <div onClick={this.handleClear}>{cancelText}</div>;
  }
  public render() {
    const { className, ...others } = this.props;
    const { value } = this.state;
    const classString = classnames(
      {
        [`${prefixCls}`]: true,
      },
      className,
    );
    const _others = omit(others, [
      'cancelText',
      'showCancelButton',
      'onClear',
      'value',
      'defaultValue',
      'onChange',
    ]);
    return (
      <Input
        className={classString}
        prefix={<Icon type="search" />}
        extra={this.renderCancelButton()}
        value={value}
        {..._others}
        onChange={this.handleChange}
      />
    );
  }
  private handleChange = v => {
    const { onChange } = this.props;
    if (!('value' in this.props)) {
      this.setState({
        value: v,
      });
    }
    if (onChange) {
      onChange(v);
    }
  };

  private handleClear = () => {
    const { onClear } = this.props;
    if (!('value' in this.props)) {
      this.setState({
        value: '',
      });
    }
    if (onClear) {
      onClear();
    }
  };
}

export default SearchBar;
