export interface InputProps extends KUI.BaseProps {
  label?: React.ReactNode | string;
  type?: string;
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  placeholder?: string;
  extra?: React.ReactNode | string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (value: string) => void;
}

export interface InputState {
  value?: string;
}

export interface InputGroupProps extends KUI.BaseProps {
  addonBefore: React.ReactNode;
  addonAfter: React.ReactNode;
}
