import React, { PureComponent, StatelessComponent } from 'react';
import classnames from 'classnames';
import { MessageProps } from './typing';

const prefixCls = 'k-message';

const MessageContent: StatelessComponent<MessageProps> = props => {
  const { children, color, className, style } = props;
  const classString = classnames(
    {
      [prefixCls]: true,
      [`${prefixCls}--${color}`]: !!color,
    },
    className,
  );
  return (
    <div className={classString} style={style}>
      {children}
    </div>
  );
};

export default MessageContent;
