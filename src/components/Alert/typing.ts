export interface AlertProps extends KUI.BaseProps {
  closeText?: React.ReactNode | string;
  closable?: boolean;
  showIcon?: boolean;
  state?: KUI.StateTypes;
  title?: React.ReactNode | string;
  description?: React.ReactNode | string;
  onClose?: () => boolean;
}

export interface AlertState {
  closing?: boolean;
  closed?: boolean;
}
