# API

```jsx
import { Input } from 'kui-mobile';
```

## Input

| 名称         | 类型                      | 默认值 | 描述           |
| ------------ | ------------------------- | ------ | -------------- |
| label        | React.ReactNode \| string | -      | 标签           |
| type         | string                    | 'text' | 输入框类型     |
| disabled     | boolean                   | false  | 是否禁用       |
| defaultValue | string                    | -      | 默认值         |
| value        | string                    | -      | 当前值             |
| placeholder  | string                    | -      | 无内容时提示   |
| extra        | React.ReactNode \| string | -      | 右侧操作区内容 |
| prefix       | React.ReactNode           | -      | 前缀内容       |
| suffix       | React.ReactNode           | -      | 后缀内容       |
| onFocus      | () => void                | -      | 聚焦时回调     |
| onBlur       | () => void                | -      | 光标离开时回调 |
| onChange     | (value) => void           | -      | 更改值时回调   |
