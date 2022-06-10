# API

```jsx
import { Radio, RadioGroup } from 'kui-mobile';
```

## Radio

| 名称           | 类型                      | 默认值 | 描述             |
| -------------- | ------------------------- | ------ | ---------------- |
| checked        | boolean                   | -      | 是否选中         |
| defaultChecked | boolean                   | -      | 初始化时是否选中 |
| disabled       | boolean                   | -      | 是否禁用         |
| title          | string \| React.ReactNode | -      | 标题             |
| label          | string \| React.ReactNode | -      | 描述             |
| circle         | boolean                   | true   | 是否圆框         |
| value          | string                    | -      | 值               |
| onChange       | (value: string) => void   | -      | 勾选时回调       |

## RadioGroup

| 名称         | 类型                    | 默认值 | 描述           |
| ------------ | ----------------------- | ------ | -------------- |
| cell         | boolean                 | false  | 是否单元格模式 |
| value        | string                  | -      | 当前值             |
| defaultValue | string                  | -      | 默认值         |
| onChange     | (value: string) => void | -      | 勾选时回调     |
