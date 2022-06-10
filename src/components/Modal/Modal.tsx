import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { ModalProps, ModalState } from './typing';
import { Button, ButtonGroup } from '../Button';
import { CSSTransition } from 'react-transition-group';
import confirm from './confirm';
import { Mask } from '../Mask';

let seed = 1;
let zIndex = 1000;

const prefixCls = 'k-modal';

class Modal extends PureComponent<ModalProps, ModalState> {
  public static alert: any;
  public static confirm: any;

  public static defaultProps = {
    mask: true,
    maskClose: false,
    okText: '确定',
    cancelText: '取消',
    showCancel: true,
    showHeader: true,
    showFooter: true,
  };

  private static getDerivedStateFromProps(nextProps, prevState) {
    if ('open' in nextProps) {
      if (nextProps.open) {
        zIndex += 2;
      } else {
        zIndex -= 2;
      }

      if (prevState.open !== nextProps.open) {
        return {
          open: nextProps.open,
        };
      }
    }

    return null;
  }

  private id: number;

  constructor(props) {
    super(props);
    this.id = seed++;
    this.state = {
      open: props.open || false,
    };
  }

  public componentDidMount() {
    const { open } = this.props;
    if (open) {
      zIndex += 2;
      setTimeout(() => {
        this.setState({
          open,
        });
      });
    }
  }

  public componentWillUnmount() {
    this.close();
    seed--;
  }

  public renderFooter() {
    const { cancelText, okText, showFooter, showCancel, footer } = this.props;
    if (!showFooter) {
      return null;
    }
    return (
      <div className={`${prefixCls}__footer`} ref="footer">
        {footer ? (
          footer
        ) : (
          <ButtonGroup className={`${prefixCls}__btns`}>
            {showCancel && (
              <Button className={`${prefixCls}__cancel`} onClick={this.handleCnacel}>
                {cancelText}
              </Button>
            )}
            <Button className={`${prefixCls}__ok`} onClick={this.handleOK}>
              {okText}
            </Button>
          </ButtonGroup>
        )}
      </div>
    );
  }

  public renderHeader() {
    const { title, showHeader } = this.props;
    if (!showHeader || !title) {
      return null;
    }
    return (
      <div className={`${prefixCls}__header`} ref="header">
        {title}
      </div>
    );
  }

  public render() {
    const { className, mask, title, content, style } = this.props;
    const { open } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
        [`${prefixCls}--in`]: open,
      },
      className,
    );
    const maskClassString = classnames({
      [`${prefixCls}-mask`]: true,
      [`${prefixCls}-mask--in`]: !!mask && open,
    });
    const _style = { zIndex, ...style };

    return ReactDOM.createPortal(
      <React.Fragment>
        <CSSTransition in={open} timeout={300} classNames="modal" unmountOnExit>
          <div className={classString} ref="modal" style={_style}>
            {this.renderHeader()}
            <div
              className={classnames({
                [`${prefixCls}__body`]: true,
                [`${prefixCls}__body--notitle`]: !title,
              })}
              ref="body"
            >
              {content}
            </div>
            {this.renderFooter()}
          </div>
        </CSSTransition>
        <Mask show={open} zIndex={zIndex - 1} onClick={this.handleMaskClick} />
      </React.Fragment>,
      document.body,
    );
  }

  private handleCnacel = e => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  private handleOK = e => {
    const { onOK } = this.props;
    if (onOK) {
      onOK();
    }
  };

  private handleMaskClick = e => {
    const { maskClose, onCancel } = this.props;
    if (maskClose) {
      this.handleCnacel(e);
    }
  };

  private close = () => {
    if (!('open' in this.props)) {
      if (!this.state.open) {
        return;
      }
      this.setState({
        open: false,
      });
    }
  };

  private open = () => {
    if (!('open' in this.props)) {
      if (this.state.open) {
        return;
      }
      this.setState({
        open: true,
      });
    }
  };
}

Modal.alert = props => {
  return confirm({
    ...props,
    showCancel: false,
    onCancel: null,
  });
};

Modal.confirm = props => {
  return confirm(props);
};

export default Modal;
