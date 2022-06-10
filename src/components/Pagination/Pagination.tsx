import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { PaginationProps, PaginationState } from './typing';
import { Button } from '../Button';

const prefixCls = 'k-pagination';

class Pagination extends PureComponent<PaginationProps, PaginationState> {
  public static defaultProps = {
    total: 0,
    mode: 'button',
    locale: {
      prevText: '上一页',
      nextText: '下一页',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      current: props.current || 1,
    };
  }
  public renderNumber() {
    const { current } = this.state;
    const { total } = this.props;
    return (
      <React.Fragment>
        <span className={`${prefixCls}__current`}>{current}</span>/<span>{total}</span>
      </React.Fragment>
    );
  }
  public renderPointer() {
    const { total } = this.props;
    const { current } = this.state;
    const dots: any = [];
    if (total) {
      for (let i = 0; i < total; i++) {
        dots.push(
          <span
            className={`${prefixCls}__dot ${current === i + 1 ? `${prefixCls}__dot--current` : ''}`}
          />,
        );
      }
    }

    return dots;
  }
  public render() {
    const { className, mode, locale, simple, total } = this.props;
    const { current } = this.state;
    const classString = classnames({
      [prefixCls]: true,
    });
    return (
      <div className={classString}>
        <div className={`${prefixCls}__prev`}>
          {mode === 'button' && locale && (
            <Button size="lg" disabled={current === 1} onClick={this.handlePrevClick}>
              {locale.prevText}
            </Button>
          )}
        </div>
        <div className={`${prefixCls}__middle`}>
          {mode !== 'pointer' && !simple && this.renderNumber()}
          {mode === 'pointer' && this.renderPointer()}
        </div>
        <div className={`${prefixCls}__next`}>
          {mode === 'button' && locale && (
            <Button size="lg" disabled={current === total} onClick={this.handleNextClick}>
              {locale.nextText}
            </Button>
          )}
        </div>
      </div>
    );
  }

  private handlePrevClick = () => {
    const { current } = this.state;
    const { onChange } = this.props;
    let pageNumber = current - 1;
    if (pageNumber <= 0) {
      pageNumber = 1;
    }
    if (!('current' in this.props)) {
      this.setState({
        current: pageNumber,
      });
    }
    if (onChange) {
      onChange(pageNumber);
    }
  };

  private handleNextClick = () => {
    const { current } = this.state;
    const { onChange, total } = this.props;
    let pageNumber = current + 1;
    if (pageNumber > total) {
      pageNumber = total;
    }
    if (!('current' in this.props)) {
      this.setState({
        current: pageNumber,
      });
    }
    if (onChange) {
      onChange(pageNumber);
    }
  };
}

export default Pagination;
