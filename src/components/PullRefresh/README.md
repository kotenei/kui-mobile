# API

```jsx
import { PullRefresh } from 'kui-mobile';
```

## PullRefresh

| 名称                 | 类型                                         | 默认值 | 描述                                                     |
| -------------------- | -------------------------------------------- | ------ | -------------------------------------------------------- |
| pullDownRefresh      | boolean                                      | -      | 是否下拉刷新                                             |
| pullUpload           | boolean                                      | -      | 是否上拉加载                                             |
| pullDownWrapperProps | object                                       | -      | 下拉参数设置                                             |
| pullUpWrapperProps   | object                                       | -      | 上拉参数设置                                             |
| onInit               | (instance)=>void                             | -      | 初始化回调                                               |
| onPullingDown        | (callback: (params: callBackParams) => void) | -      | 下拉刷新回调，必须执行 callback 函数，提示操作是否完成   |
| onPullingUp          | (callback: (params: callBackParams) => void) | -      | 上拉加载时回调，必须执行 callback 函数，提示操作是否完成 |

### callBackParams

| 名称    | 类型   | 默认值 | 描述                                                            |
| ------- | ------ | ------ | --------------------------------------------------------------- |
| status  | string | -      | 状态 'success' 'error' 'close' , 'close' 表示关闭上拉和下拉功能 |
| message | string | -      | 如果 status 为 error，并且有 message 时提示                     |

### pullDownWrapperProps

| 名称        | 类型                      | 默认值       | 描述                                    |
| ----------- | ------------------------- | ------------ | --------------------------------------- |
| pullingText | React.ReactNode \| string | '下拉可刷新' | 下拉时提示                              |
| loosingText | React.ReactNode \| string | '释放可刷新' | 下拉到指定位置时，提示可刷新            |
| loadingText | React.ReactNode \| string | -            | 正在刷新时的提示，默认显示 loading 图标 |
| successText | React.ReactNode \| string | '刷新成功'   | 刷新完成时提示                          |

### pullUpWrapperProps

| 名称        | 类型                      | 默认值         | 描述                                    |
| ----------- | ------------------------- | -------------- | --------------------------------------- |
| pullupText  | React.ReactNode \| string | '上拉加载更多' | 上拉时提示                              |
| loadingText | React.ReactNode \| string | -              | 正在加载时的提示，默认显示 loading 图标 |
