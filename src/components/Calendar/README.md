# API

```jsx
import { Calendar } from 'kui-mobile';
```

## Calendar

| 名称         | 类型                             | 默认值                                     | 描述                 |
| ------------ | -------------------------------- | ------------------------------------------ | -------------------- |
| title        | React.ReactNode \| string        | '日期选择'                                 | 标题                 |
| cancelText   | React.ReactNode \| string        | '取消'                                     | 取消文本             |
| okText       | React.ReactNode \| string        | '确定'                                     | 确定文本             |
| open         | boolean                          | false                                      | 是否显示             |
| range        | boolean                          | -                                          | 是否区间设置         |
| defalutValue | Date \| Date[]                   | -                                          | 默认日期             |
| value        | Date \| Date[]                   | -                                          | 日期                 |
| minDate      | Date                             | new Date(new Date().getFullYear(), 0, 1)   | 最小日期             |
| maxDate      | Date                             | new Date(new Date().getFullYear(), 11, 31) | 最大日期             |
| startDayText | React.ReactNode \| string        | '开始'                                     | 开始日期下方显示文本 |
| endDayText   | React.ReactNode \| string        | '结束'                                     | 结束日期下方显示文本 |
| onChange     | (value: Date \| Date[]) => void  | -                                          | 日期更改时回调       |
| onOK         | (value?: Date \| Date[]) => void | -                                          | 点击确认时回调       |
| onCancel     | () => void                       | -                                          | 点击取消时回调       |
