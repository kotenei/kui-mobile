import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import { CellProps } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-cell';

export default class Cell extends PureComponent<CellProps> {
  public static displayName = 'Cell';
  public static defaultProps = {
    border: true,
    disabled: false,
    showArrow: false,
    arrowDirection: 'right',
  };
  public renderCellLeft() {
    const { left } = this.props;
    return left && <div className={`${prefixCls}-left`}>{left}</div>;
  }
  public renderCellRight() {
    const { right } = this.props;
    return right && <div className={`${prefixCls}-right`}>{right}</div>;
  }
  public renderCellMiddle() {
    const { title, label, value, showArrow, arrowDirection } = this.props;
    return (
      <div
        className={classnames({
          [`${prefixCls}-middle`]: true,
        })}
        onClick={this.handleClick}
      >
        {title || label ? (
          <div className={`${prefixCls}-middle__text`}>
            <div className={`${prefixCls}-middle__title`}>{title}</div>
            {label && <div className={`${prefixCls}-middle__label`}>{label}</div>}
          </div>
        ) : null}

        <div className={`${prefixCls}-middle__value`}>
          {value}
          {showArrow ? <Icon type={arrowDirection} /> : null}
        </div>
      </div>
    );
  }
  public render() {
    const { className, border, to, url, large, disabled, ...others } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--lg`]: !!large,
        [`${prefixCls}--border`]: !!border,
        [`${prefixCls}--disabled`]: !!disabled,
      },
      className,
    );

    return (
      <div className={classString}>
        {this.renderCellLeft()}
        {to ? (
          <NavLink className={`${prefixCls}__link`} to={to}> {this.renderCellMiddle()}</NavLink>
        ) : url ? (
          <a className={`${prefixCls}__link`} href={url}>{this.renderCellMiddle()}</a>
        ) : (
          this.renderCellMiddle()
        )}

        {this.renderCellRight()}
      </div>
    );
  }

  private handleClick = () => {
    const { onClick, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };
}
