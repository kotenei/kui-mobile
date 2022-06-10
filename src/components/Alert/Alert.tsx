import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AlertState, AlertProps } from './typing';

const prefixCls = 'k-alert';

class Alert extends PureComponent<AlertProps, AlertState> {
  public static defaultProps = {
    showIcon: false,
    closable: false,
  };
  public state = {
    closed: false,
  };
  private seed: number = 1;
  public render() {
    const { title, description, showIcon, closable, closeText, state, className } = this.props;
    const { closed } = this.state;
    let iconType;
    switch (state) {
      case 'info':
        iconType = 'info-circle';
        break;
      case 'success':
        iconType = 'check-circle';
        break;
      case 'warning':
        iconType = 'exclamation-circle';
        break;
      case 'danger':
        iconType = 'close-circle';
        break;
    }
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${state}`]: !!state,
      },
      className,
    );
    const alert = closed ? null : (
      <CSSTransition key={this.seed++} timeout={300} classNames="fade">
        <div className={classString}>
          {showIcon && iconType ? (
            <Icon
              type={iconType}
              className={classnames({
                [`${prefixCls}__icon`]: true,
                [`${prefixCls}__icon--lg`]: !!description,
              })}
              theme="filled"
            />
          ) : null}
          <div className={`${prefixCls}__content`}>
            <div className={`${prefixCls}__title`}>{title}</div>
            {description ? <div className={`${prefixCls}__description`}>{description}</div> : null}
            {closable && !closeText ? (
              <Icon type="close" className={`${prefixCls}__close`} onClick={this.handleClose} />
            ) : null}
            {closeText ? (
              <span className={`${prefixCls}__closetext`} onClick={this.handleClose}>
                {closeText}
              </span>
            ) : null}
          </div>
        </div>
      </CSSTransition>
    );

    return <TransitionGroup component={React.Fragment}>{alert}</TransitionGroup>;
  }
  private handleClose = () => {
    const { closable, onClose } = this.props;
    if (!closable) {
      return;
    }
    if (typeof onClose === 'function' && onClose() !== false) {
      this.setState({
        closed: true,
      });
    }
  };
}

export default Alert;
