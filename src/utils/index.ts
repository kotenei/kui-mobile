import React from 'react';
import ReactDOM from 'react-dom';
import domUtils from './domUtils';

export const guid = () => {
  function S4() {
    // tslint:disable-next-line:no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

export const getCoord = e => {
  if (e.touches) {
    e = e.touches[0];
  }
  return {
    x: e.pageX || e.clientX + document.body.scrollLeft - document.body.clientLeft,
    y: e.pageY || e.clientY + document.body.scrollTop - document.body.clientTop,
  };
};

export const random = (min, max) => {
  const Range = max - min;
  const Rand = Math.random();
  const num = min + Math.round(Rand * Range);
  return num;
};

export const getPosition = props => {
  let parent: any = ReactDOM.findDOMNode(props.trigger) as HTMLElement;
  const ew = domUtils.outerWidth(parent);
  const eh = domUtils.outerHeight(parent);
  const tw = props.width || 0;
  const th = props.height || 0;
  const position = { left: 0, top: 0 };
  const offset = 4;
  let pos = { left: 0, top: 0 };

  do {
    position.left += parent.offsetLeft - parent.scrollLeft;
    position.top += parent.offsetTop - parent.scrollTop;
    parent = parent.offsetParent;
  } while (parent && parent !== document.body);

  switch (props.placement) {
    case 'left':
      pos = {
        top: position.top + eh / 2 - th / 2,
        left: position.left - tw,
      };
      break;
    case 'leftTop':
      pos = { top: position.top, left: position.left - tw };
      break;
    case 'leftBottom':
      pos = { top: position.top + eh - th, left: position.left - tw };
      break;
    case 'top':
      pos = {
        top: position.top - th - offset,
        left: position.left + ew / 2 - tw / 2,
      };
      break;
    case 'topLeft':
      pos = { top: position.top - th - offset, left: position.left };
      break;
    case 'topRight':
      pos = {
        top: position.top - th - offset,
        left: position.left + ew - tw,
      };
      break;
    case 'right':
      pos = {
        top: position.top + eh / 2 - th / 2,
        left: position.left + ew,
      };
      break;
    case 'rightTop':
      pos = { top: position.top, left: position.left + ew };
      break;
    case 'rightBottom':
      pos = { top: position.top + eh - th, left: position.left + ew };
      break;
    case 'bottom':
      pos = {
        top: position.top + eh + offset,
        left: position.left + ew / 2 - tw / 2,
      };
      break;
    case 'bottomLeft':
      pos = { top: position.top + eh + offset, left: position.left };
      break;
    case 'bottomRight':
      pos = {
        top: position.top + eh + offset,
        left: position.left + ew - tw,
      };
      break;
  }

  return pos;
};
