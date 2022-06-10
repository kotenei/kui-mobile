export interface ScrollerProps extends KUI.BaseProps {
  probeType?: number;
  click?: boolean;
  listenScroll?: boolean;
  listenBeforeScroll?: boolean;
  listenScrollEnd?: boolean;
  direction?: 'vertical' | 'horizontal';
  scrollbar?: any;
  pullDownRefresh?: any;
  pullUpLoad?: any;
  startY?: number;
  refreshDelay?: number;
  freeScroll?: boolean;
  mouseWheel?: boolean;
  bounce?: boolean;
  momentum?: boolean;
  zoom?: boolean;
  wheel?: any;
  snap?: any;
  onInit?: (instance) => void;
  onBeforeScrollStart?: () => void;
  onScrollStart?: () => void;
  onScroll?: (pos) => void;
  onScrollEnd?: (pos) => void;
  onPullingDown?: () => void;
  onPullingUp?: () => void;
  onTouchEnd?: (pos) => void;
}

export interface ScrollerState {}
