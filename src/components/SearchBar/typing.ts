export interface SearchBarProps extends KUI.BaseProps {
  cancelText?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  showCancelButton?: boolean;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export interface SearchBarState {
  value?: string;
}
