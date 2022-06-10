export interface SwipeProps extends KUI.BaseProps {
  autoPlay?: boolean;
  duration?: number;
  loop?: boolean;
  showDots?: boolean;
  speed?: number;
  vertical?: boolean;
  onChange?: (activeIndex: number) => void;
}

export interface SwipeState {
  activeIndex: number;
  width?: number;
  height?: number;
  totalWidth?: number;
  totalHeight?: number;
}
