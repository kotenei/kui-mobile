export interface SwitchProps extends KUI.BaseProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  checkedContent?: React.ReactNode | string;
  unCheckedContent?: React.ReactNode | string;
  onChange?: (checked: boolean) => void;
}

export interface SwitchState {
  checked?: boolean;
}
