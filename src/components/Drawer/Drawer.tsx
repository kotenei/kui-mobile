import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { Mask } from '../Mask';
import { DrawerProps, DrawerState } from './typing';

const prefixCls = 'k-drawer';

class Drawer extends PureComponent<DrawerProps, DrawerState> {
  public static defaultProps = {
    mask: true,
    maskClose: true,
    open: false,
    position: 'left',
    unmountOnExit: true,
  };

  private static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return {
        open: nextProps.open,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }
  public render() {
    const { children, className, position, style, onMaskClick, unmountOnExit, mask } = this.props;
    const { open } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--${position}`]: true,
      },
      className,
    );
    const classNames = `${prefixCls}--${position}`;

    return ReactDOM.createPortal(
      <React.Fragment>
        <CSSTransition
          in={open}
          timeout={300}
          classNames={classNames}
          unmountOnExit={unmountOnExit}
        >
          <div className={classString} style={style}>
            {children}
          </div>
        </CSSTransition>
        {mask && <Mask show={open} onClick={onMaskClick} />}
      </React.Fragment>,
      document.body,
    );
  }
}

export default Drawer;
