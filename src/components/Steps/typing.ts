export interface StepsProps extends KUI.BaseProps {
  alignCenter?: boolean;
  current?: number;
  direction?: 'horizontal' | 'vertical';
  status?: 'wait' | 'process' | 'finish' | 'error';
  size?: 'sm';
  showNumber?: boolean;
  iconInner?: boolean;
}

export interface StepProps extends StepsProps {
  prefixCls?: string;
  index?: number;
  icon?: React.ReactNode;
  title?: React.ReactNode | string;
  description?: React.ReactNode | string;
  nextError?: boolean;
}
