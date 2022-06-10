import React, { StatelessComponent } from 'react';

const CalendarHeader: StatelessComponent<any> = props => {
  const { prefixCls, cancelText, okText, title, onCancel, onOK } = props;
  return (
    <div className={`${prefixCls}__header`}>
      <div className={`${prefixCls}__cancel`} onClick={onCancel}>
        {cancelText}
      </div>
      <div className={`${prefixCls}__title`}>{title}</div>
      <div className={`${prefixCls}__ok`} onClick={onOK}>
        {okText}
      </div>
    </div>
  );
};

export default CalendarHeader;
