import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { LoadMoreProps } from './typing';
import { Icon } from '../Icon';
import { Loading } from '../Loading';

const prefixCls = 'k-loadmore';

const LoadMore: StatelessComponent<LoadMoreProps> = props => {
  const { className, full, tip, loading, ...others } = props;
  const classString = classnames(
    {
      [prefixCls]: true,
      [`${prefixCls}--line`]: !loading,
      [`${prefixCls}--dot`]: !loading && !tip,
      [`${prefixCls}--full`]: !!full,
    },
    className,
  );
  return (
    <div className={classString} {...others}>
      {loading ? <Loading size="sm" /> : null}
      <div className={`${prefixCls}__tip`}>{tip}</div>
    </div>
  );
};

LoadMore.defaultProps = {
  loading: true,
};

export default LoadMore;
