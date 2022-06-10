export interface CheckboxProps extends KUI.BaseProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  title: string | React.ReactNode;
  label?: string | React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

export interface CheckboxState {
  checked?: boolean;
}

export interface CheckboxGroupProps extends KUI.BaseProps {
  cell?: boolean;
  value?: string[];
  defaultValue?: string[];
  position?: 'left' | 'right';
  onChange?: (value: string[]) => void;
}

export interface CheckboxGroupState {
  value: string[];
}
