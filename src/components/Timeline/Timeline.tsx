import React from 'react';
import classnames from 'classnames';

const prefixCls = 'k-timeline';

const Timeline = props => {
  const { children, className, ...others } = props;
  const classString = classnames(
    {
      [prefixCls]: true,
    },
    className,
  );
  return (
    <ul className={classString} {...others}>
      {children}
    </ul>
  );
};

export default Timeline;
