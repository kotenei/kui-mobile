export interface CollapseProps extends KUI.BaseProps {
  activeIds?: string[];
  defaultActiveIds?: string[];
  accordion?: boolean;
  onChange?: (id: string) => void;
}

export interface CollapseState {
  activeIds?: string[];
}

export interface CollapsePanelProps extends KUI.BaseProps {
  border?: boolean;
  id: string;
  icon?: React.ReactNode | string;
  header?: React.ReactNode | string;
  activeIds?: string[];
  disabled?: boolean;
  onClick?: (id: string) => void;
}
