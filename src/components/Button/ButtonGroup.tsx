import React from 'react';
import classnames from 'classnames';

const ButtonGroup = props => {
  const { className, children, ...others } = props;
  const buttons = React.Children.map(children, (child: any) => {
    if (child && child.type && child.type.displayName === 'Button') {
      return child;
    }
    return null;
  });
  return (
    <div className={classnames('k-button-group', className)} {...others}>
      {buttons}
    </div>
  );
};

export default ButtonGroup;
