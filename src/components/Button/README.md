# API

```jsx
import { Button } from 'kui-mobile';
```

## Button

| 名称     | 类型        | 默认值 | 描述                                                           |
| -------- | ----------- | ------ | -------------------------------------------------------------- |
| color    | string      | -      | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| icon     | string      | -      | 图标，参考 '图标' 组件 'type' 设置                             |
| disabled | boolean     | false  | 是否禁用                                                       |
| full     | boolean     | -      | 宽度是否 100%                                                  |
| type     | string      | button | 按钮类型，可选 'button' 'submit' 'reset'                       |
| active   | boolean     | -      | 是否已激活                                                     |
| size     | string      | -      | 按钮大小，可选 'xs' 'sm' 'md' 'lg'                             |
| onClick  | (e) => void | -      | 点击时回调                                                     |
