import React, { StatelessComponent } from 'react';
import classnames from 'classnames';

const SwipeItem: StatelessComponent<any> = props => {
  const { prefixCls, children, className, style } = props;
  const classString = classnames(
    {
      [`${prefixCls}__item`]: true,
    },
    className,
  );
  return (
    <div className={classString} style={style}>
      {children}
    </div>
  );
};

SwipeItem.displayName = 'SwipeItem';

export default SwipeItem;
