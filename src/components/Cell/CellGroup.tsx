import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CellGroupProps } from './typing';

const prefixCls = 'k-cell-group';

class CellGroup extends PureComponent<CellGroupProps> {
  public static defaultProps = {
    border: false,
  };
  public render() {
    const { children, border } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--border`]: !!border,
    });
    return (
      <div className={classString}>
        {React.Children.map(children, (child: any) => {
          if (!child || !child.type || child.type.displayName !== 'Cell') {
            return null;
          }
          return child;
        })}
      </div>
    );
  }
}

export default CellGroup;
