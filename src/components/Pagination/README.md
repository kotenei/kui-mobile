# API

```jsx
import { Pagination } from 'kui-mobile';
```

## Pagination

| 名称     | 类型                         | 默认值                                   | 描述                                                           |
| -------- | ---------------------------- | ---------------------------------------- | -------------------------------------------------------------- |
| color    | string                       | -                                        | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| current  | number                       | -                                        | 当前页                                                         |
| locale   | object                       | { prevText: '上一页',nextText: '下一页'} | 上一页和下一页文本                                             |
| mode     | string                       | 'button'                                 | 模式，可选 'button' 'number' 'pointer'                         |
| simple   | boolean                      | -                                        | 是否简洁模式                                                   |
| total    | number                       | 0                                        | 总页数                                                         |
| onChange | (pageNumber: number) => void | -                                        | 更改页数时回调                                                 |
