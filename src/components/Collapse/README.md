# API

```jsx
import { Collapse, CollapsePanel } from 'kui-mobile';
```

## Collapse

| 名称             | 类型                 | 默认值 | 描述                |
| ---------------- | -------------------- | ------ | ------------------- |
| activeIds        | string[]             | -      | 当前激活面板 ID     |
| defaultActiveIds | string[]             | []     | 初始化时激活面板 ID |
| accordion        | boolean              | -      | 是否手风琴          |
| onChange         | (id: string) => void | -      | 切换面板的回调      |

## CollapsePanel

| 名称     | 类型                      | 默认值 | 描述          |
| -------- | ------------------------- | ------ | ------------- |
| border   | boolean                   | true   | 是否显示边框  |
| id       | string                    | -      | 对应 activeId |
| icon     | React.ReactNode \| string | -      | 图标          |
| header   | React.ReactNode \| string | -      | 面板头部内容  |
| disabled | boolean                   | false  | 是否禁用      |
