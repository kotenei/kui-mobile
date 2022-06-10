export interface LazyLoadProps extends KUI.BaseProps {
  container?: any;
  loading?: string;
  error?: string;
  onError?: (value: object) => void;
  onSuccess?: (value: object) => void;
}
