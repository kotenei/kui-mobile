export interface PullRefreshProps extends KUI.BaseProps {
  pullDownRefresh?: boolean;
  pullUpload?: boolean;
  pullDownWrapperProps?: PullDownWrapperProps;
  pullUpWrapperProps?: PullUpWrapperProps;
  onInit?: (instance) => void;
  onPullingDown?: (callback: (params: CallBackParams) => void) => void;
  onPullingUp?: (callback: (params: CallBackParams) => void) => void;
}

export interface PullRefreshState {
  beforePullDown?: boolean; // 下拉前
  isPullingDown?: boolean; // 下拉中
  canLoose?: boolean;
  isPullUpLoad?: boolean;
}

export interface PullDownWrapperProps extends KUI.BaseProps {
  beforePullDown?: boolean;
  isPullingDown?: boolean;
  canLoose?: boolean;
  pullingText?: React.ReactNode | string;
  loosingText?: React.ReactNode | string;
  loadingText?: React.ReactNode | string;
  successText?: React.ReactNode | string;
}

export interface PullUpWrapperProps extends KUI.BaseProps {
  isPullUpLoad?: boolean;
  pullupText?: React.ReactNode | string;
  loadingText?: React.ReactNode | string;
}

export interface CallBackParams {
  status: 'success' | 'error' | 'close';
  message?: string;
}
