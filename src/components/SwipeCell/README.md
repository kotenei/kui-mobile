# API

```jsx
import { SwipeCell } from 'kui-mobile';
```

## SwipeCell

| 名称      | 类型                              | 默认值 | 描述                                      |
| --------- | --------------------------------- | ------ | ----------------------------------------- |
| autoClose | boolean                           | true   | 是否自动关闭                              |
| cellProps | object                            | -      | 单元格属性设置，参考 'cell' 组件          |
| disabled  | boolean                           | -      | 是否禁用                                  |
| left      | object[]                          | -      | 左侧按钮组                                |
| right     | object[]                          | -      | 右侧按钮组                                |
| onClick   | (type: string, instance?) => void | -      | 点击时回调，type 为 'left' 'cell' 'right' |

### left or right settings

| 名称    | 类型                      | 默认值    | 描述                                                           |
| ------- | ------------------------- | --------- | -------------------------------------------------------------- |
| text    | React.ReactNode \| string | true      | 是否自动关闭                                                   |
| color   | string                    | 'primary' | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| onClick | () => void                | -         | 点击按钮时回调                                                 |
