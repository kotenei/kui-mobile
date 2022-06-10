# API

```jsx
import { Picker } from 'kui-mobile';
```

## Picker

| 名称         | 类型                                                                           | 默认值 | 描述                                            |
| ------------ | ------------------------------------------------------------------------------ | ------ | ----------------------------------------------- |
| cancelText   | React.ReactNode \| string                                                      | '取消' | 取消按钮文本                                    |
| okText       | React.ReactNode \| string                                                      | '确认' | 确认按钮文本                                    |
| title        | React.ReactNode \| string                                                      | -      | 标题                                            |
| data         | array                                                                          | -      | 数据源，格式: [ [ {label:'xxx',value:'xxx'} ] ] |
| defaultValue | string[]\|number[]                                                             | []     | 默认值                                          |
| value        | string[]\|number[]                                                             | -      | 当前值                                              |
| showHeader   | boolean                                                                        | true   | 是否显示头部                                    |
| show         | boolean                                                                        | -      | 是否显示                                        |
| onChange     | (value: string[] \| number[], selected: Column[], columnIndex: number) => void | -      | 选中项后回调                                    |
| onCancel     | () => void                                                                     | -      | 点击取消按钮时回调                              |
| onCancel     | (value: string[] \| number[], selected: Column[]) => void                      | -      | 点击按钮按钮时回调                              |
