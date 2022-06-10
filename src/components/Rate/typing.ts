export interface RateProps extends KUI.BaseProps {
  allowHalf?: boolean;
  count?: number;
  defaultValue?: number;
  value?: number;
  character?: React.ReactNode;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export interface RateState {
  value: number;
  orgValue: number;
}

export interface RateItemProps extends KUI.BaseProps {
  current: number;
  value: number;
  character?: React.ReactNode;
  allowHalf?: boolean;
  onHover?: (value: number) => void;
  onClick?: (value: number) => void;
}
