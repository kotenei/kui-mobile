import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { SwipeCellButtonProps } from './typing';

const prefixCls = 'k-swipecell-button';

const SwipeCellButton: StatelessComponent<SwipeCellButtonProps> = props => {
  const { text, color, onClick } = props;
  return (
    <div
      className={classnames({
        [`${prefixCls}`]: true,
        [`${prefixCls}--${color}`]: !!color,
      })}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default SwipeCellButton;
