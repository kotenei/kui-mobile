export interface TagProps extends KUI.BaseProps {
  color: KUI.ColorTypes;
  closable?: boolean;
  line?: boolean;
  onClose?: () => boolean;
}

export interface TagState {
  closed?: boolean;
}
