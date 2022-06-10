# API

```jsx
import { Tabs, TabsPanel } from 'kui-mobile';
```

## Tabs

| 名称               | 类型                          | 默认值 | 描述                                           |
| ------------------ | ----------------------------- | ------ | ---------------------------------------------- |
| activeIndex        | number                        | -      | 当前选中索引                                   |
| defalutActiveIndex | number                        | 0      | 默认选中索引                                   |
| tabPosition        | string                        | 'top'  | 标签页位置，可选 'top' 'left' 'right' 'bottom' |
| type               | string                        | 'line' | 标签页类型，可选 'line' 'card'                 |
| onTabClick         | (activeIndex: number) => void | -      | 点击标签的回调函数                             |

## TabsPanel

| 名称 | 类型                    | 默认值 | 描述             |
| ---- | ----------------------- | ------ | ---------------- |
| tab  | React.ReactNode\|string | -      | 选项卡头显示内容 |
