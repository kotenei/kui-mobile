export interface InputNumberProps extends KUI.BaseProps {
  defaultValue?: number;
  disabled?: boolean;
  disableInput?: boolean;
  min: number;
  max: number;
  value?: number;
  step: number;
  onChange?: (value: number) => void;
}

export interface InputNumberState {
  value: number ;
}
