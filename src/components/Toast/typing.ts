export type ToastType = 'loading' | 'info' | 'success' | 'warning' | 'error';

export interface ToastProps extends KUI.BaseProps {
  type?: ToastType;
}

export interface ToastState {}
