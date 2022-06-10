import React from 'react';
import { Icon, NavBar } from 'kui-mobile';
const prefixCls = 'app-header';

const Header = props => {
  const { children, left, right, goBack } = props;
  return (
    <NavBar
      icon={
        goBack ? (
          <Icon
            type="left"
            onClick={() => {
              history.go(-1);
            }}
          />
        ) : null
      }
      leftContent={left}
      rightContent={right}
    >
      {children}
    </NavBar>
  );
};

export default Header;
