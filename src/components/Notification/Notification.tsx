import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import omit from 'object.omit';
import Notice from './Notice';
import { NotificationProps, NotificationState, NoticeProps } from './typing';

class Notification extends PureComponent<NotificationProps, NotificationState> {
  public static newInstance: any;

  public static defaultProps = {
    transitionName: 'fade',
  };

  private isAdd: boolean = false;

  constructor(props) {
    super(props);
    this.state = {
      duration: props.duration,
      notices: [],
    };
  }

  public render() {
    const { transitionName, className } = this.props;
    const { notices, duration } = this.state;
    const nodes = notices.map((notice, i) => {
      const onClose = key => {
        this.remove(key);
        notice.onClose();
      };
      return (
        <CSSTransition timeout={300} key={notice.key} classNames={transitionName}>
          <Notice {...notice} onClose={onClose.bind(this, notice.key)} />
        </CSSTransition>
      );
    });

    return <TransitionGroup component={React.Fragment}>{nodes}</TransitionGroup>;
  }

  public add = (noticeProps: NoticeProps): void => {
    const { notices } = this.state;
    const newNotices = [...notices];
    const index = notices.findIndex(notice => notice.key === noticeProps.key);
    if (index < 0) {
      newNotices.push(noticeProps);
    } else {
      newNotices.splice(index, 1);
    }
    this.setState({
      notices: newNotices,
      duration: noticeProps.duration,
    });
  };

  public remove = key => {
    this.setState(prevState => {
      return {
        notices: prevState.notices.filter(notice => notice.key !== key),
      };
    });
  };
}

Notification.newInstance = props => {
  let instance;
  const container = document.createElement('div');
  const handleRef = node => {
    instance = node;
  };
  document.body.appendChild(container);
  ReactDOM.render(<Notification {...props} ref={handleRef} />, container);

  return {
    notice(noticeProps: NoticeProps) {
      setTimeout(() => {
        instance && instance.add(noticeProps);
      });
    },
    remove(key) {
      instance && instance.remove(key);
    },
    destory() {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    },
  };
};

export default Notification;
