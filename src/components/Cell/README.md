# API

```jsx
import { Cell, CellGroup } from 'kui-mobile';
```

## Cell

| 名称           | 类型                      | 默认值 | 描述                                |
| -------------- | ------------------------- | ------ | ----------------------------------- |
| border         | boolean                   | true   | 是否显示边框                        |
| disabled       | boolean                   | false  | 是否禁用                            |
| title          | string \| React.ReactNode | -      | 标题                                |
| label          | string \| React.ReactNode | -      | 副标题                              |
| value          | string \| React.ReactNode | -      | 描述                                |
| left           | string \| React.ReactNode | -      | 左侧内容                            |
| right          | string \| React.ReactNode | -      | 右侧内容                            |
| to             | string                    | -      | 路由地址                            |
| url            | string                    | -      | 跳转地址                            |
| showArrow      | boolean                   | false  | 是否显示箭头                        |
| arrowDirection | string                    | -      | 箭头方向 'left' 'right' 'up' 'down' |
| large          | boolean                   | -      | 是否大尺寸                          |
| onClick        | () => void                | -      | 点击时回调                          |

## CellGroup

| 名称   | 类型    | 默认值 | 描述         |
| ------ | ------- | ------ | ------------ |
| border | boolean | true   | 是否显示边框 |
