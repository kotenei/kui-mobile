# API

```jsx
import { SearchBar } from 'kui-mobile';
```

## SearchBar

| 名称             | 类型                    | 默认值 | 描述               |
| ---------------- | ----------------------- | ------ | ------------------ |
| cancelText       | string                  | '取消' | 取消按钮文本       |
| defaultValue     | string                  | -      | 默认值             |
| value            | string                  | -      | 当前值             |
| disabled         | boolean                 | false  | 是否禁用           |
| placeholder      | string                  | -      | 无内容时提示       |
| showCancelButton | boolean                 | false  | 是否显示取消按钮   |
| onChange         | (value: string) => void | -      | 更改值时回调       |
| onClear          | () => void              | -      | 点击取消按钮时回调 |
