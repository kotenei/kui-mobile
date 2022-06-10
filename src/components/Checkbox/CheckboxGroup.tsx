import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CheckboxGroupState, CheckboxGroupProps } from './typing';
import { Cell, CellGroup } from '../Cell';

const prefixCls = 'k-checkbox-group';

class CheckboxGroup extends PureComponent<CheckboxGroupProps, CheckboxGroupState> {
  public static defaultProps = {
    cell: false,
    defaultValue: [],
    position: 'right',
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
    const { children, position } = this.props;
    const { value } = this.state;
    return (
      <CellGroup border>
        {React.Children.map(children, (child: any, index: number) => {
          if (!child || !child.type || child.type.displayName !== 'Checkbox') {
            return null;
          }
          const { title, label, disabled } = child.props;
          const childValue = child.props.value !== undefined ? child.props.value : index;
          const checkbox = React.cloneElement(child, {
            disabled,
            circle: false,
            checked: value.indexOf(childValue) > -1,
            onChange: this.handleChange,
          });
          const onClick = () => {
            this.handleChange(childValue);
          };
          return (
            <Cell
              left={position === 'left' && checkbox}
              title={title}
              label={label}
              disabled={disabled}
              value={position === 'right' && checkbox}
              onClick={onClick}
            />
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
          if (!child || !child.type || child.type.displayName !== 'Checkbox') {
            return null;
          }
          const childValue = child.props.value !== undefined ? child.props.value : index;
          return React.cloneElement(child, {
            ...child.props,
            value: child.props.value !== undefined ? child.props.value : index,
            checked: value.indexOf(childValue) > -1,
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
      const newValue = [...this.state.value];
      const index = newValue.indexOf(value);
      if (index < 0) {
        newValue.push(value);
      } else {
        newValue.splice(index, 1);
      }
      this.setState({
        value: newValue,
      });
    }
    if (onChange) {
      onChange(value);
    }
  };
}

export default CheckboxGroup;
