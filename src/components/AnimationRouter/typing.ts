export interface AnimationRouterProps extends KUI.BaseProps {
  appear?: boolean;
  component?: React.ReactNode | string;
  enter?: boolean;
  exit?: boolean;
  fallback?: React.ReactNode;
  prefixCls?: string;
  timeout?: number;
  [key: string]: any;
}

export interface AnimationRouterState {}
