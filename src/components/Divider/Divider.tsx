import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { DividerProps } from './typing';

const prefixCls = 'k-divider';

const Divider: StatelessComponent<DividerProps> = props => {
  const { component: Component, className, color } = props;
  const classString = classnames({
    [prefixCls]: true,
    [`${prefixCls}--${color}`]: !!color,
  });
  if (Component && Component !== 'hr') {
    return (
      <Component className={className}>
        <hr className={`${classString}`} />
      </Component>
    );
  }
  return <hr className={`${classString} ${className}`} />;
};

Divider.defaultProps = {
  component: 'hr',
};

export default Divider;
