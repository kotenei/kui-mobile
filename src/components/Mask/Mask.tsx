import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { MaskProps } from './typing';

const prefixCls = 'k-mask';

const Mask: StatelessComponent<MaskProps> = props => {
  const { className, style, show, zIndex, timeout, transitionName, ...others } = props;
  const _style = { zIndex, ...style };
  return (
    <CSSTransition in={show} timeout={timeout} classNames={transitionName} unmountOnExit>
      <div
        className={classnames(
          {
            [prefixCls]: true,
          },
          className,
        )}
        style={_style}
        {...others}
      />
    </CSSTransition>
  );
};

Mask.defaultProps = {
  show: false,
  zIndex: 800,
  timeout: 300,
  transitionName: 'fade',
};

export default Mask;
