import React, { PureComponent, Suspense } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { AnimationRouterProps, AnimationRouterState } from './typing';

export default class AnimationRouter extends PureComponent<
  AnimationRouterProps,
  AnimationRouterState
> {
  public static defaultProps = {
    appear: true,
    component: React.Fragment,
    enter: true,
    exit: true,
    prefixCls: 'k-animation-router',
    timeout: 300,
  };
  private lastLocation: any;
  public componentDidMount() {}
  public render() {
    const {
      children,
      location,
      timeout,
      component,
      appear,
      enter,
      exit,
      fallback,
      prefixCls,
    } = this.props;
    const groupProps = {
      appear,
      component,
      enter,
      exit,
    };

    this.setLastLocation();

    return (
      <TransitionGroup
        childFactory={child => {
          const classNames = prefixCls + '-' + (this.lastLocation.isPush ? 'forward' : 'backward');
          return React.cloneElement(child, {
            classNames,
          });
        }}
        {...groupProps}
      >
        <CSSTransition key={location.pathname} timeout={timeout}>
          {fallback ? (
            <Suspense fallback={fallback}>
              <Switch location={location}>{children}</Switch>
            </Suspense>
          ) : (
            <Switch location={location}>{children}</Switch>
          )}
        </CSSTransition>
      </TransitionGroup>
    );
  }

  private setLastLocation() {
    const { location, history } = this.props;
    const key = location.key || location.pathname + location.search;
    if (!this.lastLocation) {
      this.lastLocation = {
        key,
        isPush: true,
      };
    } else if (this.lastLocation.key !== key) {
      const { action } = history;
      this.lastLocation.key = key;
      this.lastLocation.isPush = action.toLowerCase() === 'push';
    }
  }
}
