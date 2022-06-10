import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { TabPanelProps } from './typing';

const prefixCls = 'k-tabs__panel';

class TabPanel extends PureComponent<TabPanelProps> {
  public render() {
    const { children, isActive } = this.props;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--active`]: isActive,
    });
    return <div className={classString}>{children}</div>;
  }
}

export default TabPanel;
