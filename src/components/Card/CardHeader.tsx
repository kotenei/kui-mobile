import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { CardHeaderProps } from './typing';

const prefixCls = 'k-card-header';

const CardHeader: StatelessComponent<CardHeaderProps> = props => {
  const { className, extra, children, ...others } = props;
  const classString = classnames(
    {
      [prefixCls]: true,
    },
    className,
  );
  return (
    <div className={classString} {...others}>
      <div className={`${prefixCls}__title`}>{children}</div>
      <div className={`${prefixCls}__extra`}>{extra}</div>
    </div>
  );
};

CardHeader.displayName = 'CardHeader';

export default CardHeader;
