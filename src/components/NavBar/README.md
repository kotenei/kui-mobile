# API

```jsx
import { NavBar } from 'kui-mobile';
```

## NavBar

| 名称         | 类型                      | 默认值  | 描述                      |
| ------------ | ------------------------- | ------- | ------------------------- |
| icon         | React.ReactNode           | -       | 图标                      |
| mode         | string                    | 'light' | 模式，可选 'light' 'dark' |
| leftContent  | React.ReactNode \| string | -       | 左侧区域内容              |
| rightContent | React.ReactNode \| string | -       | 右侧区域内容              |
| onLeftClick  | () => void                | -       | 左侧点击回调              |
| onRightClick | () => void                | -       | 右侧点击回调              |
