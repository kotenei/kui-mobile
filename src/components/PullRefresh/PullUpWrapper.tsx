import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { PullUpWrapperProps } from './typing';
import { LoadMore } from '../LoadMore';

const prefixCls = 'k-pullrefresh-pullup-wrapper';

const PullUpWrapper: StatelessComponent<PullUpWrapperProps> = props => {
  const { isPullUpLoad, pullupText, loadingText } = props;
  return (
    <div className={prefixCls}>
      {!isPullUpLoad && <span>{pullupText}</span>}
      {isPullUpLoad && <span>{loadingText || <LoadMore tip="正在加载" />}</span>}
    </div>
  );
};

PullUpWrapper.defaultProps = {
  isPullUpLoad: false,
  pullupText: '上拉加载更多',
};

export default PullUpWrapper;
