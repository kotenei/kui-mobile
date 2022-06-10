export type PaginationMode = 'button' | 'number' | 'pointer';

export interface PaginationLocale {
  prevText: React.ReactNode | string;
  nextText: React.ReactNode | string;
}

export interface PaginationProps extends KUI.BaseProps {
  color?: KUI.ColorTypes;
  current?: number;
  locale?: PaginationLocale;
  mode?: PaginationMode;
  simple?: boolean;
  total: number;
  onChange?: (pageNumber: number) => void;
}

export interface PaginationState {
  current: number;
}
