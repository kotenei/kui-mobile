import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { SwipeProps, SwipeState } from './typing';
import { Scroller } from '../Scroller';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-swipe';
const THRESHOLD = 10;

class Swipe extends PureComponent<SwipeProps, SwipeState> {
  public static defaultProps = {
    autoPlay: true,
    duration: 4000,
    loop: true,
    showDots: true,
    speed: 500,
    vertical: false,
  };

  private itemsCount: number = 0;
  private scroller: any;
  private elmSwipe: HTMLDivElement;
  private timer: number;

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  public componentDidMount() {
    this.init();
  }

  public renderItems() {
    const { children } = this.props;
    const { activeIndex, width, height } = this.state;
    this.itemsCount = 0;
    return React.Children.map(children, (child: any, index: number) => {
      if (child && child.type && child.type.displayName === 'SwipeItem') {
        this.itemsCount++;
        const _style = {
          ...child.props.style,
          width,
          height,
        };
        return React.cloneElement(child, {
          ...child.props,
          style: _style,
          prefixCls,
        });
      }
      return null;
    });
  }

  public renderDots() {
    const { activeIndex } = this.state;
    const dots: any = [];
    for (let i = 0; i < this.itemsCount; i++) {
      dots.push(
        <span
          key={i}
          className={classnames({
            [`${prefixCls}__dot`]: true,
            [`${prefixCls}__dot--active`]: i === activeIndex,
          })}
        />,
      );
    }
    return dots;
  }

  public render() {
    const { className, style, vertical, loop, autoPlay, speed } = this.props;
    const { totalWidth, totalHeight } = this.state;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--vertical`]: !!vertical,
    });
    const snap = {
      loop,
      threshold: THRESHOLD,
      speed,
    };
    const itemsStyle = {
      width: vertical ? '100%' : totalWidth,
      height: vertical ? totalHeight : '100%',
    };
    return (
      <div className={classString} style={style} ref={this.handleRef}>
        <Scroller
          direction={vertical ? 'vertical' : 'horizontal'}
          snap={snap}
          className={`${prefixCls}__wrapper`}
          momentum={false}
          bounce={false}
          onInit={this.onScrollerInit}
          onBeforeScrollStart={this.handleBeforeScrollStart}
          onScrollEnd={this.handleScrollEnd}
          onTouchEnd={this.handleTouchEnd}
        >
          <div className={`${prefixCls}__items`} style={itemsStyle}>
            {this.renderItems()}
          </div>
        </Scroller>
        <div className={`${prefixCls}__dots`}>{this.renderDots()}</div>
      </div>
    );
  }

  private handleRef = (elm: HTMLDivElement) => {
    this.elmSwipe = elm;
  };

  private handleBeforeScrollStart = () => {
    const { autoPlay } = this.props;
    if (autoPlay) {
      clearTimeout(this.timer);
    }
  };

  private handleScrollEnd = pos => {
    const { autoPlay, onChange, vertical } = this.props;
    const activeIndex = vertical
      ? this.scroller.getCurrentPage().pageY
      : this.scroller.getCurrentPage().pageX;

    if (autoPlay) {
      this.play();
    }
    this.setState({
      activeIndex,
    });

    if (onChange) {
      onChange(activeIndex);
    }
  };

  private handleTouchEnd = () => {
    const { autoPlay } = this.props;
    if (autoPlay) {
      this.play();
    }
  };

  private init() {
    const { autoPlay } = this.props;
    const width = domUtils.outerWidth(this.elmSwipe);
    const height = domUtils.outerHeight(this.elmSwipe);
    const totalWidth = (this.itemsCount + 2) * width;
    const totalHeight = (this.itemsCount + 2) * height;
    this.setState(
      {
        width,
        height,
        totalWidth,
        totalHeight,
      },
      () => {
        this.scroller && this.scroller.refresh();
        if (autoPlay) {
          this.play();
        }
      },
    );
  }

  private onScrollerInit = instance => {
    this.scroller = instance;
  };

  private play() {
    const { duration } = this.props;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.scroller.next();
    }, duration);
  }

  private next() {}
}

export default Swipe;
