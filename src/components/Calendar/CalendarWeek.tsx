import React, { StatelessComponent } from 'react';

const CalendarWeek: StatelessComponent<any> = props => {
  const { prefixCls, daysMin } = props;
  return (
    <div className={`${prefixCls}__week`}>
      {daysMin.map((d, index) => {
        return <span key={index}>{d}</span>;
      })}
    </div>
  );
};

CalendarWeek.defaultProps = {
  daysMin: ['日', '一', '二', '三', '四', '五', '六'],
};

export default CalendarWeek;
