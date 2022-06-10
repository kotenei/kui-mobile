export interface NoticeProps extends KUI.BaseProps {
  key?: string;
  duration?: number;
  content?: React.ReactNode;
  onClose?: () => {};
}

export interface NotificationProps extends KUI.BaseProps {
  transitionName?: string;
}

export interface NotificationState {
  duration?: number;
  notices?: any;
}
