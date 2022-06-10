# API

```jsx
import { LazyLoad } from 'kui-mobile';
```

## LazyLoad

| 名称      | 类型                    | 默认值 | 描述             |
| --------- | ----------------------- | ------ | ---------------- |
| container | object                  | window | 容器             |
| loading   | string                  | -      | 预加载图片       |
| error     | string                  | -      | 加载失败图片     |
| onError   | (value: object) => void | -      | 加载失败回调函数 |
| onSuccess | (value: object) => void | -      | 加载成功回调函数 |
