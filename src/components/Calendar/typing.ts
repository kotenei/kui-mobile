export interface CalendarProps extends KUI.BaseProps {
  title?: React.ReactNode | string;
  cancelText?: React.ReactNode | string;
  okText?: React.ReactNode | string;
  open?: boolean;
  range?: boolean;
  defaultValue?: Date | Date[];
  value?: Date | Date[];
  minDate?: Date;
  maxDate?: Date;
  startDayText?: React.ReactNode | string;
  endDayText?: React.ReactNode | string;
  onChange?: (value: Date | Date[]) => void;
  onOK?: (value?: Date | Date[]) => void;
  onCancel?: () => void;
}

export interface CalendarState {
  value?: Date | Date[];
  tmpValue?: Date | Date[];
  viewData: Date[];
  canPullDown: boolean;
  canPullUp: boolean;
}

export interface CalendarMonthProps extends KUI.BaseProps {
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  value?: Date | Date[];
  startDayText?: React.ReactNode | string;
  endDayText?: React.ReactNode | string;
  onChange?: (value: Date) => void;
}
