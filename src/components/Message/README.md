# API

```jsx
import { Message } from 'kui-mobile';
```

## Message

调用

```jsx
Message(content, settings);
```


| 名称    | 类型            | 默认值 | 描述     |
| ------- | --------------- | ------ | -------- |
| content | React.ReactNode | -      | 提示内容 |

### settings

| 名称     | 类型     | 默认值    | 描述                                                           |
| -------- | -------- | --------- | -------------------------------------------------------------- |
| duration | number   | 1500      | 自动关闭延时，单位毫秒                                         |
| color    | string   | 'primary' | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| onClose  | ()=>void | -         | 关闭时回调                                                     |
