export interface ProgressProps extends KUI.BaseProps {
  color?: KUI.ColorTypes;
  type?: 'line' | 'circle';
  percent?: number;
  status?: 'success' | 'error';
  strokeWidth?: number;
  textInside?: boolean;
  showText?: boolean;
  width?: number;
  indeterminate?: boolean;
  text?: string;
  nativeColor?: string;
}
