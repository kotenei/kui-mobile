# API

```jsx
import { Modal } from 'kui-mobile';
```

## Modal

| 名称       | 类型                    | 默认值 | 描述             |
| ---------- | ----------------------- | ------ | ---------------- |
| title      | React.ReactNode\|string | -      | 标题             |
| content    | React.ReactNode\|string | -      | 内容             |
| footer     | React.ReactNode         | -      | 底部内容         |
| mask       | boolean                 | true   | 显否显示遮罩     |
| maskClose  | boolean                 | false  | 点击遮罩是否关闭 |
| open       | boolean                 | -      | 是否显示         |
| okText     | React.ReactNode\|string | '确定' | 确定按钮文本     |
| cancelText | React.ReactNode\|string | '取消' | 取消按钮文本     |
| showCancel | boolean                 | true   | 是否显示取消按钮 |
| showHeader | boolean                 | true   | 是否显示头部内容 |
| showCancel | boolean                 | true   | 是否显示底部内容 |
| onCancel   | () => void \| boolean   | -      | 点击取消按钮回调 |
| onOK       | () => void \| boolean   | -      | 点击确定按钮回调 |

## Modal.method()

```jsx
Modal.alert(props);

Modal.confirm(props);
```
