export interface LoadingProps extends KUI.BaseProps {
  color?: KUI.ColorTypes;
  size?: 'sm' | 'lg';
  tip?: React.ReactNode | string;
  vertical?: boolean;
}
