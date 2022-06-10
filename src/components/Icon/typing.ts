export type ThemeType = 'outline' | 'filled';

export interface IconProps extends KUI.BaseProps {
  fontSize?: number;
  theme?: ThemeType;
  type?: string;
  color?: KUI.ColorTypes;
  spin?: boolean;
  viewBox?: string;
  onClick?: () => void;
}

export interface SvgIconProps extends KUI.BaseProps {
  color?: KUI.ColorTypes;
  nativeColor?: string;
  fontSize?: number;
  title?: string;
  viewBox?: string;
}
