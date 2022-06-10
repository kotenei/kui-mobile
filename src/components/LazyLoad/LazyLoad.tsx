import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { LazyLoadProps } from './typing';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-lazyload';

class LazyLoad extends PureComponent<LazyLoadProps> {
  public static defaultProps = {
    container: window,
  };

  private container: any;
  private timer: number;
  private loading: object = {};
  private cache: object[] = [];
  private count: number = 0;

  public componentDidMount() {
    const { loading, container } = this.props;
    let elmImgs;
    if (container === window) {
      this.container = window;
      elmImgs = document.querySelectorAll('img');
    } else {
      if (container) {
        this.container = document.querySelector(container);
      } else {
        this.container = this.refs.container;
      }
      elmImgs = this.container.querySelectorAll(`img`);
    }

    elmImgs.forEach(img => {
      if (!img.getAttribute('data-src')) {
        return;
      }
      if (!img.getAttribute('src') && loading) {
        img.setAttribute('src', loading);
      }
      this.cache.push(img);
      this.count++;
    });
    if (loading) {
      this.loadImageAsync(
        loading,
        ret => {
          this.load();
        },
        null,
      );
    } else {
      this.timer = setTimeout(() => {
        this.load();
      }, 300);
    }
    this.container.addEventListener('scroll', this.handleScroll);
  }
  public componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.container.removeEventListener('scroll', this.handleScroll);
  }
  public render() {
    const { className, style, children } = this.props;
    const classString = classnames({
      [prefixCls]: true,
    });
    return (
      <div className={classString} style={style} ref="container">
        {children}
      </div>
    );
  }
  private handleScroll = () => {
    this.load();
  };

  private load() {
    if (this.count <= 0) {
      return;
    }
    const { onSuccess, onError, error } = this.props;
    const containerHeight =
      this.container === window
        ? document.documentElement.offsetHeight
        : domUtils.height(this.refs.container);
    const containerTop =
      this.container === window
        ? document.body.scrollTop || document.documentElement.scrollTop
        : domUtils.offset(this.refs.container).top;

    this.cache.forEach((img: HTMLElement) => {
      const src = img.getAttribute('data-src');
      const imgTop = domUtils.offset(img).top;
      const imgHeight = domUtils.height(img);
      const range = [imgTop - containerTop, imgTop - containerTop + imgHeight];

      if (
        (range[0] >= 0 && range[0] < containerHeight) ||
        (range[1] > 0 && range[1] <= containerHeight)
      ) {
        this.loadImageAsync(
          src,
          ret => {
            img.setAttribute('src', ret.src);
            if (onSuccess) {
              onSuccess({
                ...ret,
                target: img,
              });
            }
            this.count--;
          },
          e => {
            if (error) {
              img.setAttribute('src', error);
            }
            if (onError) {
              onError({
                target: img,
                src,
              });
            }
            this.count--;
          },
        );
      }
    });
  }

  private loadImageAsync(src, resolve?, reject?) {
    if (this.loading[src]) {
      return;
    }
    this.loading[src] = true;
    const image = new Image();
    image.src = src;
    image.onload = () => {
      if (resolve) {
        resolve({
          naturalHeight: image.naturalHeight,
          naturalWidth: image.naturalWidth,
          src,
        });
      }
    };
    image.onerror = e => {
      if (reject) {
        reject(e);
      }
    };
  }
}

export default LazyLoad;
