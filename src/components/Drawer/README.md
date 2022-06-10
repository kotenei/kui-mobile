# API

```jsx
import { Drawer } from 'kui-mobile';
```

## Divider

| 名称          | 类型       | 默认值 | 描述                                         |
| ------------- | ---------- | ------ | -------------------------------------------- |
| mask          | boolean    | true   | 是否显示遮罩层                               |
| maskClose     | boolean    | true   | 点击遮罩层是否关闭                           |
| position      | string     | 'left' | 弹出位置，可选 'left' 'top' 'right' 'bottom' |
| unmountOnExit | boolean    | true   | 关闭时是否卸载组件                           |
| open          | boolean    | -      | 是否显示                                     |
| onMaskClick   | () => void | -      | 点击遮罩层回调                               |
