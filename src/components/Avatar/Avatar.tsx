import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { AvatarProps } from './typing';
import { Icon } from '../Icon';

const prefixCls = 'k-avatar';

const Avatar: StatelessComponent<AvatarProps> = props => {
  const { color, children, icon, square, size, src, style } = props;
  const classString = classnames({
    [prefixCls]: true,
    [`${prefixCls}--${color}`]: !!color,
    [`${prefixCls}--${size}`]: !!size,
    [`${prefixCls}--square`]: !!square,
  });
  return (
    <div className={classString} style={style}>
      {src ? <img src={src} /> : children}
      {typeof icon === 'string' ? <Icon type={icon} /> : icon}
    </div>
  );
};

Avatar.defaultProps = {
  size: 'md',
  square: false,
};

export default Avatar;
