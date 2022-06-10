export type NoticeBarMode = 'closable' | 'link';

export interface NoticeBarProps extends KUI.BaseProps {
  delay?: number;
  mode?: NoticeBarMode;
  icon?: React.ReactNode | string;
  action?: React.ReactNode;
  scrollable?: boolean;
  speed?: number;
  onClick?: () => void;
}

export interface NoticeBarState {
  closed?: boolean;
  loop?: boolean;
  firstRound?: boolean;
  flag?: boolean;
}
