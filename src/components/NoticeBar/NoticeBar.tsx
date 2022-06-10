import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { NoticeBarProps, NoticeBarState } from './typing';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-noticebar';

class NoticeBar extends React.Component<NoticeBarProps, NoticeBarState> {
  public static defaultProps = {
    delay: 1,
    icon: 'sound',
    scrollable: true,
    speed: 50,
  };

  private duration: number = 5;
  private wrapWidth: number = 0;
  private contentWidth: number = 0;

  constructor(props) {
    super(props);
    this.state = {
      closed: false,
      loop: false,
      firstRound: true,
      flag: false,
    };
  }
  public componentDidMount() {
    this.measureText();
  }

  public componentDidUpdate() {}

  public render() {
    const { children, className, icon, mode, action, delay, scrollable } = this.props;
    const { loop, firstRound, flag, closed } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    const contentStyle = {
      paddingLeft: !flag && firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (firstRound ? delay : 0) + 's',
      animationDuration: this.duration + 's',
    };
    const contentClass = classnames({
      [`${prefixCls}__content`]: true,
      [`${prefixCls}__content--play`]: loop && scrollable && firstRound && !flag,
      [`${prefixCls}__content--loop`]: loop && scrollable && !firstRound,
    });

    return (
      !closed && (
        <div className={classString} ref="container" onClick={this.handleClick}>
          <div className={`${prefixCls}__icon`} ref="icon">
            {typeof icon === 'string' ? <Icon type={icon} /> : icon}
          </div>
          <div className={`${prefixCls}__wrap`} ref="wrap">
            <div
              className={contentClass}
              ref="content"
              style={contentStyle}
              onAnimationEnd={this.animationEnd}
            >
              {children}
            </div>
          </div>
          <div
            className={`${prefixCls}__operation`}
            ref="operation"
            onClick={this.handleOperationClick}
          >
            {!action && mode === 'closable' && <Icon type="close" />}
            {!action && mode === 'link' && <Icon type="right" />}
            {action}
          </div>
        </div>
      )
    );
  }

  private handleClick = e => {
    const { target } = e;
    const { mode, onClick } = this.props;
    if (mode === 'link' && onClick) {
      onClick();
    }
  };

  private handleOperationClick = e => {
    const { onClick, mode } = this.props;
    if (mode === 'closable') {
      this.setState({
        closed: true,
      });
    }
    if (onClick) {
      onClick();
    }
  };

  private measureText() {
    const { speed } = this.props;
    this.wrapWidth = domUtils.width(this.refs.wrap);
    this.contentWidth = domUtils.width(this.refs.content);
    if (this.contentWidth > this.wrapWidth) {
      this.duration = this.contentWidth / (speed || 0);
      this.setState({
        loop: true,
      });
    }
  }

  private animationEnd = () => {
    const { speed } = this.props;
    if (!this.state.firstRound) {
      return;
    }
    this.duration = (this.contentWidth + this.wrapWidth) / (speed || 0);
    this.setState(
      {
        flag: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            firstRound: false,
          });
        });
      },
    );
  };
}

export default NoticeBar;
