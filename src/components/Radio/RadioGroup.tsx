import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Cell, CellGroup } from '../Cell';
import { RadioGroupProps, RadioGroupState } from './typing';

const prefixCls = 'k-radio-group';

class RadioGroup extends PureComponent<RadioGroupProps, RadioGroupState> {
  public static defaultProps = {
    cell: false,
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

  public renderCell() {
    const { children } = this.props;
    const { value } = this.state;
    return (
      <CellGroup border>
        {React.Children.map(children, (child: any, index: number) => {
          if (!child || !child.type || child.type.displayName !== 'Radio') {
            return null;
          }
          const { title, label, disabled } = child.props;
          const childValue = child.props.value !== undefined ? child.props.value : index;
          const radio = React.cloneElement(child, {
            disabled,
            circle: false,
            checked: value === childValue,
            onChange: this.handleChange,
          });
          const onClick = () => {
            this.handleChange(childValue);
          };

          return (
            <Cell title={title} label={label} disabled={disabled} value={radio} onClick={onClick} />
          );
        })}
      </CellGroup>
    );
  }

  public render() {
    const { children, className, cell } = this.props;
    const { value } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return !cell ? (
      <div className={classString}>
        {React.Children.map(children, (child: any, index: number) => {
          if (!child || !child.type || child.type.displayName !== 'Radio') {
            return null;
          }
          const childValue = child.props.value !== undefined ? child.props.value : index;
          return React.cloneElement(child, {
            ...child.props,
            value: child.props.value !== undefined ? child.props.value : index,
            checked: value === childValue,
            onChange: this.handleChange,
          });
        })}
      </div>
    ) : (
      this.renderCell()
    );
  }

  private handleChange = value => {
    const { onChange } = this.props;
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    if (onChange) {
      onChange(value);
    }
  };
}

export default RadioGroup;
