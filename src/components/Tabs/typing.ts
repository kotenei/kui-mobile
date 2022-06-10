export interface TabsProps extends KUI.BaseProps {
  activeIndex?: number;
  defalutActiveIndex?: number;
  tabPosition?: 'top' | 'left' | 'right' | 'bottom';
  type?: 'line' | 'card';
  onTabClick?: (activeIndex: number) => void;
}

export interface TabsState {
  activeIndex?: number;
}

export interface TabPanelProps {
  tab?: string | React.ReactNode;
  isActive?: boolean;
}

export interface TabNavProps extends TabsProps {}

export interface TabNavState {
  inkWidth: number;
  inkHeight: number;
  inkLeft: number;
  inkTop: number;
  scrolling: boolean;
  scrollLeft: number;
  scrollTop: number;
}

export interface TabNavItemProps {
  index: number;
  isActive: boolean;
  disabled: boolean;
  onClick?: (index: number) => void;
}

export interface TabContentProps extends TabsProps {}

export interface TabContentState {
  scrollLeft: number;
}
