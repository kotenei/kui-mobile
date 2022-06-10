export type DatePickerMode = 'date' | 'time' | 'datetime' | 'year' | 'yearmonth';
export type DatePickerType = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export interface DatePickerProps extends KUI.BaseProps {
  defaultValue?: Date;
  formatter?: (type: DatePickerType, value: any) => React.ReactNode | string;
  mode: DatePickerMode;
  minDate?: Date;
  maxDate?: Date;
  value?: Date;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
  show?: boolean;
  title?: React.ReactNode | string;
  onCancel?: () => void;
  onOK?: (date: Date) => void;
  onChange?: (date: Date) => void;
}

export interface DatePickerState {
  date: Date;
  tmpDate: Date;
}
