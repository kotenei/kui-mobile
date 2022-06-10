# API

```jsx
import { NoticeBar } from 'kui-mobile';
```

## NoticeBar

| 名称       | 类型                      | 默认值  | 描述                         |
| ---------- | ------------------------- | ------- | ---------------------------- |
| delay      | number                    | 1       | 动画延迟时间 (s)             |
| mode       | string                    | -       | 模式，可选 'closable' 'link' |
| icon       | React.ReactNode \| string | 'sound' | 图标                         |
| action     | React.ReactNode           | -       | 自定义操作区内容             |
| scrollable | boolean                   | true    | 是否可滚动                   |
| speed      | number                    | 50      | 滚动速度                     |
