export interface RadioProps extends KUI.BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  title: string | React.ReactNode;
  label?: string | React.ReactNode;
  circle?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export interface RadioState {
  checked?: boolean;
}

export interface RadioGroupProps extends KUI.BaseProps {
  cell?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export interface RadioGroupState {
  value?: string;
}
