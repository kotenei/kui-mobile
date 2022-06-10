import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { ColProps } from './typing';
import omit from 'object.omit';

const prefixCls = 'k-col';

export default class Col extends PureComponent<ColProps> {
  public static displayName = 'Col';
  public static defaultProps = {
    offset: 0,
  };
  public render() {
    const { className, children, offset, span, ...others } = this.props;
    let responsiveClasses = {};
    let props = { ...others };
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
    sizes.forEach((size: string) => {
      let sizeSpan;
      if (typeof this.props[size] === 'number') {
        sizeSpan = this.props[size];
      }
      props = omit(props, [size]);
      responsiveClasses = {
        ...responsiveClasses,
        [`${prefixCls}-${size}-${sizeSpan}`]: sizeSpan !== undefined,
      };
    });
    const classes = classnames(
      {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${span}`]: span !== undefined,
        [`${prefixCls}-offset-${offset}`]: offset !== undefined,
      },
      className,
      responsiveClasses,
    );

    return (
      <div className={classes} {...props}>
        {children}
      </div>
    );
  }
}
