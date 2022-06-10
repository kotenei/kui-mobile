import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { CSSTransition, Transition } from 'react-transition-group';
import ActionSheetItem from './ActionSheetItem';
import { ActionSheetProps, Action } from './typing';
import { Mask } from '../Mask';
import { Drawer } from '../Drawer';
import domUtils from '../../utils/domUtils';

const prefixCls = 'k-actionsheet';

class ActionSheet extends PureComponent<ActionSheetProps> {
  public static defaultProps = {
    actions: [],
    show: false,
    showCancel: false,
    cancelText: '取消',
    maskClose: true,
  };
  private contentElement: HTMLDivElement;
  public renderItems() {
    const { actions } = this.props;
    const items: any = [];
    if (actions && actions.length > 0) {
      actions.forEach((item: Action, index: number) => {
        items.push(
          <ActionSheetItem
            key={index}
            index={index}
            {...item}
            prefixCls={prefixCls}
            onClick={this.handleSelect}
          />,
        );
      });
    }
    return items;
  }
  public render() {
    const { cancelText, className, style, show, showCancel, title, children } = this.props;
    const classString = classnames(
      {
        [prefixCls]: true,
      },
      className,
    );
    return (
      <Drawer position="bottom" open={show} onMaskClick={this.handleMaskClick}>
        <div className={classString} ref={this.handleRef}>
          {title && <div className={`${prefixCls}__header`}>{title}</div>}
          <div className={`${prefixCls}__content`}>
            {this.renderItems()}
            {children}
          </div>
          {showCancel && (
            <div className={`${prefixCls}__cancel`}>
              <div className={`${prefixCls}__item`} onClick={this.handleCancel}>
                {cancelText}
              </div>
            </div>
          )}
        </div>
      </Drawer>
    );
  }

  private handleRef = (element: HTMLDivElement) => {
    this.contentElement = element;
  };

  private handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  private handleMaskClick = () => {
    const { maskClose } = this.props;
    if (maskClose) {
      this.handleCancel();
    }
  };

  private handleSelect = index => {
    const { onSelect, actions } = this.props;
    const item = actions && actions[index];
    if (onSelect && item) {
      onSelect(item);
    }
  };
}

export default ActionSheet;
