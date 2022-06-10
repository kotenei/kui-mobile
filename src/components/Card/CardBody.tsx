import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { CardBodyProps } from './typing';

const prefixCls = 'k-card-body';

const CardBody: StatelessComponent<CardBodyProps> = props => {
  const { className, children, ...others } = props;
  const classString = classnames(
    {
      [prefixCls]: true,
    },
    className,
  );
  return (
    <div className={classString} {...others}>
      {children}
    </div>
  );
};

CardBody.displayName = 'CardBody';

export default CardBody;
