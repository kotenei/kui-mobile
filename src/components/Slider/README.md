# API

```jsx
import { Slider } from 'kui-mobile';
```

## Slider

| 名称         | 类型              | 默认值    | 描述                                                           |
| ------------ | ----------------- | --------- | -------------------------------------------------------------- |
| color        | string            | 'primary' | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| disabled     | boolean           | false     | 是否禁用                                                       |
| range        | boolean           | false     | 是否区间                                                       |
| step         | number            | 1         | 步进                                                           |
| min          | number            | 0         | 最小值                                                         |
| max          | number            | 100       | 最大值                                                         |
| value        | number \|number[] | -         | 当前值                                                         |
| defaultValue | number \|number[] | 0         | 默认值                                                         |
| onChange     | (value) => void   | -         | 更改值时回调                                                   |
