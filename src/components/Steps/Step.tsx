import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { StepProps } from './typing';
import { Icon } from '../Icon';

class Step extends PureComponent<StepProps> {
  public static displayName = 'Step';
  public renderIcon() {
    const { icon, status, index, showNumber } = this.props;
    if (icon) {
      return icon;
    }
    if (status === 'finish') {
      return <Icon type="check" />;
    }
    if (status === 'error') {
      return <Icon type="close" />;
    }
    return showNumber && (index || 0) + 1;
  }
  public render() {
    const { title, description, status, prefixCls, nextError, icon, iconInner } = this.props;
    const classString = classnames({
      [`${prefixCls}__step`]: true,
      [`${prefixCls}__step--${status}`]: true,
      [`${prefixCls}__step--nextError`]: nextError,
    });
    const classes = classnames({
      [`${prefixCls}__icon`]: true,
      [`${prefixCls}__icon--customize`]: !!icon && !iconInner,
    });

    return (
      <div className={classString}>
        <div className={`${prefixCls}__tail`} />
        <div className={classes}>{this.renderIcon()}</div>
        <div className={`${prefixCls}__content`}>
          <div className={`${prefixCls}__title`}>{title}</div>
          <div className={`${prefixCls}__description`}>{description}</div>
        </div>
      </div>
    );
  }
}

export default Step;
