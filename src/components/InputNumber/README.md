# API

```jsx
import { InputNumber } from 'kui-mobile';
```

## InputNumber

| 名称          | 类型                   | 默认值 | 描述         |
| ------------- | ---------------------- | ------ | ------------ |
| disabled      | boolean                | -      | 是否禁用     |
| disabledInput | boolean                | -      | 是否禁用输入框   |
| defaultValue  | number                 | 0      | 默认值       |
| value         | number                 | -      | 当前值           |
| min           | number                 | 0      | 最小值       |
| max           | number                 | 10     | 最大值       |
| step          | number                 | 1      | 步进值       |
| onChange      | (value:number) => void | -      | 更改值时回调 |
