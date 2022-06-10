import React from 'react';
import classnames from 'classnames';

const prefixCls = 'app-block';

const Block = props => {
  const { title, children, bodyPadding } = props;
  let padding = true;
  if (typeof bodyPadding === 'boolean') {
    padding = bodyPadding;
  }
  return (
    <div className={prefixCls}>
      {title && <h2 className={`${prefixCls}-title`}>{title}</h2>}
      <div
        className={classnames({
          [`${prefixCls}-body`]: true,
          [`${prefixCls}-body--padding`]: padding,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Block;
