export interface ModalProps extends KUI.BaseProps {
  title?: React.ReactNode | string;
  content?: React.ReactNode | string;
  footer?: React.ReactNode;
  mask?: boolean;
  maskClose?: boolean;
  open?: boolean;
  okText?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  showCancel?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  onCancel?: () => void | boolean;
  onOK?: () => void | boolean;
}

export interface ModalState {
  open: boolean;
}
