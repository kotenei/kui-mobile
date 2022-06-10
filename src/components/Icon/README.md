# API

```jsx
import { Icon, SvgIcon } from 'kui-mobile';
```

## Icon

| 名称     | 类型     | 默认值          | 描述                                                           |
| -------- | -------- | --------------- | -------------------------------------------------------------- |
| fontSize | number   | -               | 图标大小                                                       |
| theme    | string   | 'outline'       | 图标风格，可选 'outline' 和 'filled'                           |
| color    | string   | -               | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| type     | string   | -               | 图标类型                                                       |
| spin     | boolean  | -               | 是否旋转                                                       |
| viewBox  | string   | '0 0 1024 1024' | 视图框                                                         |
| onClick  | ()=>void | -               | 点击回调                                                       |

## SvgIcon

| 名称        | 类型   | 默认值          | 描述                                                           |
| ----------- | ------ | --------------- | -------------------------------------------------------------- |
| color       | string | -               | 颜色风格，可选值 'primary' 'info' 'success' 'warning' 'danger' |
| nativeColor | string | -               | 自定义颜色                                                     |
| fontSize    | number | -               | 图标大小                                                       |
| viewBox     | string | '0 0 1024 1024' | 视图框                                                         |
