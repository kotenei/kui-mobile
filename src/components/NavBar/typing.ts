export type NavBarMode = 'light' | 'dark';

export interface NavBarProps extends KUI.BaseProps {
  icon?: React.ReactNode;
  mode?: NavBarMode;
  leftContent?: React.ReactNode | string;
  rightContent?: React.ReactNode | string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}
