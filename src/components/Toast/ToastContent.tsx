import React, { PureComponent, StatelessComponent } from 'react';
import classnames from 'classnames';
import { ToastProps, ToastState } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-toast';

const iconType = {
  loading: 'loading',
  success: 'check',
  warning: 'exclamation',
  error: 'close',
};

const ToastContent: StatelessComponent<ToastProps> = props => {
  const { children, type } = props;
  const icon = type && iconType[type] ? <Icon type={iconType[type]} /> : null;
  const classString = classnames({
    [prefixCls]: true,
    [`${prefixCls}--info`]: type === 'info',
  });
  return (
    <div className={classString}>
       {icon && <div className={`${prefixCls}__icon`}>{icon}</div>}
        <div className={`${prefixCls}__content`}>{children}</div>
    </div>
  );
};

export default ToastContent;
