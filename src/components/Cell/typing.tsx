export interface CellProps extends KUI.BaseProps {
  border?: boolean;
  disabled?: boolean;
  title?: string | React.ReactNode;
  value?: string | React.ReactNode;
  label?: string | React.ReactNode;
  left?: string | React.ReactNode;
  right?: string | React.ReactNode;
  to?: string;
  url?: string;
  showArrow?: boolean;
  arrowDirection?: 'left' | 'right' | 'up' | 'down';
  large?: boolean;
  onClick?: () => void;
}

export interface CellGroupProps extends KUI.BaseProps {
  border?: boolean;
}
