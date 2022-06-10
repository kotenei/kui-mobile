import { Button } from '../Button';
import { CellProps } from '../Cell/typing';

export type SwipeCellClickType = 'left' | 'cell' | 'right';

export interface SwipeCellProps extends KUI.BaseProps {
  autoClose?: boolean;
  cellProps?: CellProps;
  disabled?: boolean;
  left?: SwipeCellButtonProps[];
  right?: SwipeCellButtonProps[];
  // onClose?: (type: 'left' | 'right', instance?) => void;
  // onOpen?: (type: 'left' | 'right', instance?) => void;
  onClick?: (type: SwipeCellClickType, instance?) => void;
}

export interface SwipeCellButtonProps {
  text?: React.ReactNode | string;
  color?: KUI.ColorTypes;
  onClick?: () => void;
}

export interface SwipeCellState {
  translateX: number;
}
