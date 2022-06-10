# API

```jsx
import { Toast } from 'kui-mobile';
```

## Toast

调用

```jsx
Toast.loading(content, settings);

Toast.info(content, settings);

Toast.success(content, settings);

Toast.warning(content, settings);

Toast.fail(content, settings);
```

| 名称    | 类型            | 默认值 | 描述     |
| ------- | --------------- | ------ | -------- |
| content | React.ReactNode | -      | 提示内容 |

### settings

| 名称     | 类型     | 默认值 | 描述                   |
| -------- | -------- | ------ | ---------------------- |
| duration | number   | 1500   | 自动关闭延时，单位毫秒 |
| mask     | boolean  | false  | 是否显示遮罩           |
| onClose  | ()=>void | -      | 关闭时回调             |
