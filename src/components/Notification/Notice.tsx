import React, { PureComponent, Children } from 'react';
import classnames from 'classnames';
import { NoticeProps } from './typing';

const prefixCls = 'k-notice';

class Notice extends PureComponent<NoticeProps> {
  public static defaultProps = {
    duration: 1500,
  };

  private timer: any = null;

  public componentDidMount() {
    this.startCloseTimer();
  }

  public componentWillUnmount() {
    this.clearCloseTimer();
  }

  public componentWillReceiveProps(nextprops) {
    if (this.props.duration !== nextprops.duration) {
      this.clearCloseTimer();
      this.startCloseTimer(nextprops.duration);
    }
  }

  public render() {
    const { content, className, style } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return content;
  }

  private clearCloseTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  private startCloseTimer = (duration = this.props.duration) => {
    if (duration) {
      this.timer = setTimeout(() => {
        this.close();
      }, duration);
    }
  };

  private close = () => {
    const { onClose } = this.props;
    this.clearCloseTimer();
    if (onClose) {
      onClose();
    }
  };
}

export default Notice;
