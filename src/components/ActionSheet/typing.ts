export interface ActionSheetProps extends KUI.BaseProps {
  actions?: Action[];
  maskClose?: boolean;
  show?: boolean;
  showCancel?: boolean;
  title?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  onCancel?: () => void;
  onSelect?: (action: Action) => void;
}

export interface ActionSheetState {
  maskClosed?: boolean;
}

export interface Action {
  text: React.ReactNode | string;
  disabled?: boolean;
  loading?: boolean;
}

export interface ActionSheetItemProps extends KUI.BaseProps {
  index: number;
  text: React.ReactNode | string;
  disabled?: boolean;
  loading?: boolean;
  prefixCls: string;
  onClick?: (index: number) => void;
}
