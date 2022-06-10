export interface AvatarProps extends KUI.BaseProps {
  icon?: React.ReactNode | string;
  square?: boolean;
  size?: 'lg' | 'md' | 'sm';
  color?: KUI.ColorTypes;
  src?: string;
}
