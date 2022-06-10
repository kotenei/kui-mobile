# API

```jsx
import { TabBar, TabBarItem } from 'kui-mobile';
```

## TabBar

| 名称        | 类型   | 默认值    | 描述       |
| ----------- | ------ | --------- | ---------- |
| activeColor | string | '#2196f3' | 选中后颜色 |

## TabBarItem

| 名称     | 类型                      | 默认值 | 描述           |
| -------- | ------------------------- | ------ | -------------- |
| id       | string                    | -      | 编号           |
| badge    | number\|string            | -      | 圆点里面的字符 |
| dot      | boolean                   | -      | 是否显示圆点   |
| icon     | React.ReactNode \| string | -      | 图标           |
| selected | boolean                   | -      | 是否选中       |
| title    | string                    | -      | 标题           |
| onChange | (id?: string) => void     | -      | 选中时回调     |
