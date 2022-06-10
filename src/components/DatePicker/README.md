# API

```jsx
import { DatePicker } from 'kui-mobile';
```

## DatePicker

| 名称         | 类型                                                    | 默认值                                                 | 描述                                                                 |
| ------------ | ------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------- |
| defaultValue | Date object                                             | new Date()                                             | 默认值                                                               |
| formatter    | (type: string, value: any) => React.ReactNode \| string | -                                                      | 格式化显示项, type 对应'year' 'month' 'day' 'hour' 'minute' 'second' |
| mode         | string                                                  | 'date'                                                 | 模式，可选 'date' 'time' 'datetime' 'year' 'yearmonth'               |
| minDate      | Date object                                             | new Date('1900-01-01')                                 | 最小日期                                                             |
| maxDate      | Date object                                             | addYears(new Date(new Date().getFullYear(), 0, 1), 10) | 最大日期                                                             |
| value        | Date object                                             | -                                                      | 当前值                                                                   |
| hourStep     | number                                                  | -                                                      | 小时步进值                                                           |
| minuteStep   | number                                                  | -                                                      | 分钟步进值                                                           |
| secondStep   | number                                                  | -                                                      | 秒步进值                                                             |
| show         | boolean                                                 | false                                                  | 是否显示                                                             |
| title        | React.ReactNode \| string                               | -                                                      | 标题                                                                 |
| onCancel     | () => void                                              | -                                                      | 取消时回调                                                           |
| onOK         | (date: Date) => void                                    | -                                                      | 确定时回调                                                           |
| onChange     | (date: Date) => void                                    | -                                                      | 日期更改时回调                                                       |
