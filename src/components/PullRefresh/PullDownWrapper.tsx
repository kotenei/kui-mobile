import React, { StatelessComponent } from 'react';
import classnames from 'classnames';
import { PullDownWrapperProps } from './typing';
import { Loading } from '../Loading';
import { Icon } from '../Icon';

const prefixCls = 'k-pullrefresh-pulldown-wrapper';

const PullDownWrapper: StatelessComponent<PullDownWrapperProps> = props => {
  const {
    beforePullDown,
    isPullingDown,
    canLoose,
    pullingText,
    loosingText,
    loadingText,
    successText,
    ...others
  } = props;
  return (
    <div className={`${prefixCls}`} {...others}>
      {beforePullDown && <span>{pullingText}</span>}
      {!beforePullDown && (
        <React.Fragment>
          {canLoose && <span>{loosingText}</span>}
          {isPullingDown && !canLoose && <span>{loadingText || <Loading size="sm" />}</span>}
          {!isPullingDown && !canLoose && <span>{successText}</span>}
        </React.Fragment>
      )}
    </div>
  );
};

PullDownWrapper.defaultProps = {
  beforePullDown: true,
  isPullingDown: false,
  canLoose: false,
  pullingText: '下拉可刷新',
  loosingText: '释放可刷新',
  successText: '刷新成功',
};

export default PullDownWrapper;
