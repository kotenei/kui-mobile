# API

```jsx
import { Notification } from 'kui-mobile';
```

## Notification

使用

```jsx
const instance = Notification.newInstance(props);

instance.notice(NoticeProps);

instance.remove(key);

instance.destory();
```

| 名称           | 类型   | 默认值 | 描述     |
| -------------- | ------ | ------ | -------- |
| transitionName | string | 'fade' | 动画名称 |

### NoticeProps

| 名称     | 类型            | 默认值 | 描述                   |
| -------- | --------------- | ------ | ---------------------- |
| key      | string          | -      | 键值                   |
| duration | number          | 1500   | 自动关闭延时，单位毫秒 |
| content  | React.ReactNode | -      | 内容                   |
| onClose  | ()=>void        | -      | 关闭时回调             |
