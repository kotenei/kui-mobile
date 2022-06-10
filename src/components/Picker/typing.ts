export interface PickerProps extends KUI.BaseProps {
  data?: Column[][];
  cancelText?: React.ReactNode | string;
  defaultValue?: string[] | number[];
  value?: string[] | number[];
  okText?: React.ReactNode | string;
  loading?: boolean;
  title?: React.ReactNode | string;
  showHeader?: boolean;
  show?: boolean;
  onChange?: (value: string[] | number[], selected: Column[], columnIndex: number) => void;
  onCancel?: () => void;
  onOK?: (value: string[] | number[], selected: Column[]) => void;
}

export interface PickerState {
  value: string[] | number[];
}

export interface PickerSelectProps extends KUI.BaseProps {
  columnIndex: number;
  columns?: Column[];
  value?: string | number;
  onChange?: (column: Column, columnIndex: number) => void;
}

export interface PickerSelectState {
  activeIndex?: number;
  value?: string | number;
}

export interface PickerItemProps extends KUI.BaseProps {
  prefixCls: string;
  label: React.ReactNode | string;
  value: string | number;
  disabled?: boolean;
  selected?: boolean;
  onClick?: (value: string | number) => void;
}

export interface Column {
  label: React.ReactNode | string;
  value: string | number;
  disabled?: boolean;
}
