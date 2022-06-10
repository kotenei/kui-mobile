import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { CardFooterProps } from './typing';

const prefixCls = 'k-card-footer';

const CardFooter: StatelessComponent<CardFooterProps> = props => {
  const { className, extra, children, ...others } = props;
  const classString = classnames(
    {
      [prefixCls]: true,
    },
    className,
  );
  return (
    <div className={classString} {...others}>
      <div className={`${prefixCls}__content`}>{children}</div>
      <div className={`${prefixCls}__extra`}>{extra}</div>
    </div>
  );
};

CardFooter.displayName = 'CardFooter';

export default CardFooter;
