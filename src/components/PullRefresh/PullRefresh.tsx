import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PullRefreshProps, PullRefreshState } from './typing';
import { Scroller } from '../Scroller';
import { Toast } from '../Toast';
import PullDownWrapper from './PullDownWrapper';
import PullUpWrapper from './PullUpWrapper';

const THRESHOLD = 55;
const PULLUP_THRESHOLD = 0;
const STOP = 50;
const REFRESH_TIME = 20;

const prefixCls = 'k-pullrefresh';

class PullRefresh extends PureComponent<PullRefreshProps, PullRefreshState> {
  private instance: any;
  private canScroll: boolean = true;

  constructor(props) {
    super(props);
    this.state = {
      beforePullDown: true,
      isPullingDown: false,
      canLoose: false,
      isPullUpLoad: false,
    };
  }

  public componentDidMount() {}

  public render() {
    const {
      children,
      className,
      pullDownWrapperProps,
      pullUpWrapperProps,
      pullDownRefresh,
      pullUpload,
      ...others
    } = this.props;
    const { beforePullDown, isPullingDown, canLoose, isPullUpLoad } = this.state;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );

    return (
      <Scroller
        scrollbar={{ fade: true }}
        pullDownRefresh={
          pullDownRefresh && {
            threshold: THRESHOLD,
            stop: STOP,
          }
        }
        pullUpLoad={
          pullUpload && {
            threshold: PULLUP_THRESHOLD,
          }
        }
        {...others}
        onInit={this.handleInit}
        onScroll={this.handleScroll}
        onPullingDown={this.handlePulldown}
        onPullingUp={this.handlePullUp}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className={classString}>
          {pullDownRefresh && (
            <PullDownWrapper
              {...pullDownWrapperProps}
              beforePullDown={beforePullDown}
              isPullingDown={isPullingDown}
              canLoose={canLoose}
            />
          )}

          {children}
          {pullUpload && <PullUpWrapper {...pullUpWrapperProps} isPullUpLoad={isPullUpLoad} />}
        </div>
      </Scroller>
    );
  }

  private handleInit = instance => {
    const { onInit } = this.props;
    this.instance = instance;
    if (onInit) {
      onInit(instance);
    }
  };

  private handleScroll = pos => {
    const { pullDownRefresh } = this.props;
    const { isPullingDown, canLoose, beforePullDown } = this.state;
    if (isPullingDown || !pullDownRefresh) {
      return;
    }

    if (pos.y >= THRESHOLD && !canLoose) {
      this.setState({
        canLoose: true,
        beforePullDown: false,
      });
    }

    if (pos.y >= 0 && pos.y < THRESHOLD && canLoose) {
      this.setState({
        canLoose: false,
        beforePullDown: true,
      });
    }
  };

  private handlePulldown = () => {
    const { onPullingDown } = this.props;

    this.setState(
      {
        beforePullDown: false,
        canLoose: false,
        isPullingDown: true,
      },
      () => {
        if (onPullingDown) {
          onPullingDown(params => {
            this.setState(
              {
                isPullingDown: false,
                beforePullDown: true,
              },
              () => {
                this.finishPullDown();
                if (params.status === 'close') {
                  this.closePullDown();
                }
              },
            );
            if (params.status === 'error' && params.message) {
              Toast.info(params.message);
            }
          });
        }
      },
    );
  };

  private handleTouchEnd = pos => {
    const { beforePullDown, canLoose } = this.state;
    if (!beforePullDown && canLoose) {
      this.setState({
        isPullingDown: true,
      });
    } else {
      this.setState({
        isPullingDown: false,
      });
    }
  };

  private handlePullUp = () => {
    const { onPullingUp } = this.props;
    this.setState(
      {
        isPullUpLoad: true,
      },
      () => {
        if (onPullingUp) {
          onPullingUp(params => {
            this.setState(
              {
                isPullUpLoad: false,
              },
              () => {
                this.finishPullUp();
                if (params.status === 'close') {
                  this.closePullUp();
                }
              },
            );
            if (params.status === 'error' && params.message) {
              Toast.info(params.message);
            }
          });
        }
      },
    );
  };

  private finishPullDown() {
    setTimeout(() => {
      this.instance && this.instance.finishPullDown();
      this.instance.refresh();
    }, REFRESH_TIME);
  }

  private closePullDown() {
    setTimeout(() => {
      this.instance && this.instance.closePullDown();
      this.instance.refresh();
    }, REFRESH_TIME);
  }

  private finishPullUp() {
    setTimeout(() => {
      this.instance && this.instance.finishPullUp();
      this.instance.refresh();
    }, REFRESH_TIME);
  }

  private closePullUp() {
    setTimeout(() => {
      this.instance && this.instance.closePullUp();
      this.instance.refresh();
    }, REFRESH_TIME);
  }
}

export default PullRefresh;
