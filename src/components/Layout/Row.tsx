import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { RowProps } from './typing';

const prefixCls = 'k-row';

export default class Row extends PureComponent<RowProps> {
  public static defaultProps = {
    align: 'top',
    gutter: 0,
    justify: 'start',
  };
  public render() {
    const { align, gutter, justify, children, className, style, ...others } = this.props;
    const gutterStyle = gutter
      ? {
          marginLeft: -gutter / 2,
          marginRight: -gutter / 2,
        }
      : null;
    const _style = { ...gutterStyle, ...style };
    const classes = classnames(prefixCls, className, {
      [`${prefixCls}--${justify}`]: !!justify,
      [`${prefixCls}--${align}`]: !!align,
    });
    const cols = React.Children.map(children, (child: any) => {
      if (child && child.type && child.type.displayName === 'Col') {
        if (child.props && gutter !== undefined && gutter > 0) {
          return React.cloneElement(child, {
            style: {
              paddingLeft: gutter / 2,
              paddingRight: gutter / 2,
              ...child.props.style,
            },
          });
        }
        return child;
      }
      return null;
    });

    return (
      <div className={classes} {...others} style={_style}>
        {cols}
      </div>
    );
  }
}
