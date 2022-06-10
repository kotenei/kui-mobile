# API

```jsx
import { Swipe, SwipeItem } from 'kui-mobile';
```

## Swipe

| 名称     | 类型                          | 默认值 | 描述             |
| -------- | ----------------------------- | ------ | ---------------- |
| autoPlay | boolean                       | true   | 是否自动播放     |
| duration | number                        | 4000   | 播放间隔（毫秒） |
| loop     | boolean                       | true   | 是否循环播放     |
| showDots | boolean                       | true   | 是否显示圆点     |
| speed    | number                        | 500    | 播放速度(毫秒)   |
| vertical | boolean                       | false  | 是否垂直         |
| onChange | (activeIndex: number) => void | -      | 切换时回调       |
