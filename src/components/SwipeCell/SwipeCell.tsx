import React, { PureComponent } from 'react';
import classnames from 'classnames';
import SwipeCellButton from './SwipeCellButton';
import { SwipeCellProps, SwipeCellState, SwipeCellButtonProps } from './typing';
import { Cell } from '../Cell';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-swipecell';

class SwipeCell extends PureComponent<SwipeCellProps, SwipeCellState> {
  public static defaultProps = {
    autoClose: true,
  };

  private elmCell: HTMLDivElement;
  private leftWidth: number = 0;
  private middleWidth: number = 0;
  private rightWidth: number = 0;
  private orgCoord: any = { x: 0, y: 0 };
  private orgTranslateX: number = 0;
  private isTouch: boolean = false;

  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
    };
  }

  public renderButtons(items?: SwipeCellButtonProps[]) {
    if (!items || items.length === 0) {
      return null;
    }
    const btns: any = [];
    items.forEach((item, index) => {
      btns.push(<SwipeCellButton key={index} {...item} />);
    });
    return btns;
  }

  public componentDidMount() {
    const elmLeft = this.elmCell.querySelector(`.${prefixCls}__left`) as HTMLDivElement;
    const elmRight = this.elmCell.querySelector(`.${prefixCls}__right`) as HTMLDivElement;
    const elmMiddle = this.elmCell.querySelector(`.${prefixCls}__middle`) as HTMLDivElement;
    this.leftWidth = domUtils.width(elmLeft);
    this.rightWidth = domUtils.width(elmRight);
    this.middleWidth = domUtils.width(elmMiddle);
  }

  public render() {
    const { cellProps, left, right, style, className } = this.props;
    const { translateX } = this.state;
    const leftBtns = this.renderButtons(left);
    const rightBtns = this.renderButtons(right);

    const _style: any = {
      ...style,
      transform: `translateX(${translateX}px)`,
    };

    if (this.isTouch) {
      _style.transition = 'none';
    }

    return (
      <div
        className={classnames(
          {
            [`${prefixCls}`]: true,
          },
          className,
        )}
        style={_style}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        ref={this.handleRef}
      >
        <div className={`${prefixCls}__left`} onClick={this.handleLeftClick}>
          {leftBtns}
        </div>
        <div className={`${prefixCls}__middle`} onClick={this.handleMiddleClick}>
          <Cell {...cellProps} />
        </div>
        <div className={`${prefixCls}__right`} onClick={this.handleRightClick}>
          {rightBtns}
        </div>
      </div>
    );
  }

  private handleRef = (elm: HTMLDivElement) => {
    this.elmCell = elm;
  };

  private handleLeftClick = e => {
    this.click('left');
  };

  private handleMiddleClick = e => {
    this.click('cell');
  };

  private handleRightClick = e => {
    this.click('right');
  };

  private handleTouchStart = e => {
    const { cellProps } = this.props;
    const { clientX, clientY } = e.touches[0];
    const { translateX } = this.state;
    if (cellProps && cellProps.disabled) {
      return;
    }
    this.orgCoord.x = clientX;
    this.orgTranslateX = translateX;
    this.isTouch = true;
  };

  private handleTouchMove = e => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const { cellProps } = this.props;
    const { translateX } = this.state;
    const { clientX, clientY } = e.touches[0];
    if (cellProps && cellProps.disabled) {
      return;
    }
    let diff = this.orgCoord.x - clientX;
    diff += -this.orgTranslateX;

    if (diff >= this.rightWidth) {
      diff = this.rightWidth;
    }

    if (diff <= -this.leftWidth) {
      diff = -this.leftWidth;
    }

    this.setState({
      translateX: -diff,
    });
  };

  private handleTouchEnd = e => {
    this.isTouch = false;
    const { translateX } = this.state;
    const { cellProps } = this.props;
    const num = 10;
    let type;
    let diff;
    let newTranslateX;

    if (cellProps && cellProps.disabled) {
      return;
    }

    if (this.orgTranslateX !== translateX) {
      if (translateX < 0) {
        diff = this.orgTranslateX - translateX;
        newTranslateX = -this.rightWidth;
        type = 'right';
      } else {
        diff = translateX - this.orgTranslateX;
        newTranslateX = this.leftWidth;
        type = 'left';
      }
      if (diff >= num) {
        this.setState({
          translateX: newTranslateX,
        });
      } else if (diff <= -num) {
        this.setState({
          translateX: 0,
        });
      } else {
        this.setState({
          translateX: this.orgTranslateX,
        });
      }
    }
  };

  private click(type) {
    const { autoClose, onClick } = this.props;
    if (autoClose) {
      this.close();
    }
    if (onClick) {
      onClick(type, this);
    }
  }

  private close = () => {
    if (this.state.translateX !== 0) {
      this.setState({
        translateX: 0,
      });
    }
  };
}

export default SwipeCell;
