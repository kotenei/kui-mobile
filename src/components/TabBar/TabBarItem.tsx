import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { Badge } from '../Badge';
import { TabBarItemProps } from './typing';

const prefixCls = 'k-tabbar-item';

class TabBarItem extends PureComponent<TabBarItemProps> {
  public static displayName = 'TabBarItem';
  public render() {
    const { icon, style, dot, badge, title } = this.props;
    return (
      <div className={`${prefixCls}`} style={style} onClick={this.handleClick}>
        <div className={`${prefixCls}__icon`}>
          <Badge dot={dot} text={badge} color="danger">
            {typeof icon === 'string' ? <Icon type={icon} /> : icon}
          </Badge>
        </div>
        <div className={`${prefixCls}__text`}>{title}</div>
      </div>
    );
  }
  private handleClick = () => {
    const { onChange, id } = this.props;
    if (onChange) {
      onChange(id);
    }
  };
}

export default TabBarItem;
