# API

```jsx
import { ActionSheet } from 'kui-mobile';
```

## ActionSheet

| 名称       | 类型                      | 默认值 | 描述             |
| ---------- | ------------------------- | ------ | ---------------- |
| actions    | Action[]                  | []     | 选项             |
| maskClose  | boolean                   | true   | 点击遮罩是否关闭 |
| show       | boolean                   | false  | 是否显示         |
| showCancel | boolean                   | false  | 是否显示取消按钮 |
| title      | React.ReactNode \| string | -      | 标题             |
| cancelText | React.ReactNode \| string | 取消   | 取消按钮文本     |
| onCancel   | () => void                | -      | 取消时回调       |
| onSelect   | (action: Action) => void  | -      | 选择时回调       |

### Action

| 名称     | 类型                      | 默认值 | 描述       |
| -------- | ------------------------- | ------ | ---------- |
| text     | React.ReactNode \| string | -      | 文本       |
| disabled | boolean                   | -      | 是否禁用   |
| loading  | boolean                   | -      | 是否加载中 |
