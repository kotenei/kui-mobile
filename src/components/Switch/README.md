# API

```jsx
import { Switch } from 'kui-mobile';
```

## Switch
| 名称             | 类型                       | 默认值 | 描述           |
| ---------------- | -------------------------- | ------ | -------------- |
| defaultChecked   | boolean                    | false  | 默认是否选中   |
| checked          | boolean                    | -      | 当前是否选中   |
| disabled         | boolean                    | false  | 是否禁用       |
| loading          | boolean                    | false  | 是否加载中     |
| checkedContent   | React.ReactNode \| string  | -      | 选中时的内容   |
| unCheckedContent | React.ReactNode \| string  | -      | 非选中时的内容 |
| onChange         | (checked: boolean) => void | -      | 切换时回调函数 |
