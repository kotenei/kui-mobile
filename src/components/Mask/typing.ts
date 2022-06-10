export interface MaskProps extends KUI.BaseProps {
  zIndex?: number;
  show?: boolean;
  timeout?: number;
  transitionName?: string;
  onClick?: () => void;
}
