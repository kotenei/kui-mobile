import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { CardProps } from './typing';

const prefixCls = 'k-card';

const Card: StatelessComponent<CardProps> = props => {
  const { full, children, className, ...others } = props;
  const classString = classnames({
    [prefixCls]: true,
    [`${prefixCls}--full`]: !!full,
  });
  return (
    <div className={classString} {...others}>
      {React.Children.map(children, (child: any, index) => {
        if (
          child &&
          child.type &&
          /CardHeader|CardBody|CardFooter/.test(child.type.displayName)
        ) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

export default Card;
