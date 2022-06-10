import React from 'react';
import classnames from 'classnames';
import ToastContent from './ToastContent';
import { Notification } from '../Notification';
import { ToastType } from './typing';
import { guid } from '../../utils';

const defaultSettings: Settings = {
  key: 'toast',
  duration: 1500,
  mask: false,
  onClose: () => {},
};
let instance;

interface Settings {
  key?: string;
  duration?: number;
  mask?: boolean;
  onClose?: () => void;
}

const notice = (content: React.ReactNode, type, settings?: Settings) => {
  const strMask = 'k-toast-mask';
  const options = { ...defaultSettings, ...settings };

  const container = (
    <div
      className={classnames({
        [strMask]: options.mask,
        [`${strMask}--hide`]: !options.mask,
      })}
    >
      <ToastContent type={type}>{content}</ToastContent>
    </div>
  );

  if (!content) {
    return;
  }

  if (instance) {
    instance.destory();
    instance = null;
  }

  instance = Notification.newInstance();

  instance.notice({
    key: options.key,
    content: container,
    duration: options.duration,
    onClose: options.onClose,
  });

  return {
    remove() {
      instance.remove(options.key);
    },
  };
};

export default {
  loading(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'loading', settings);
  },
  info(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'info', settings);
  },
  success(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'success', settings);
  },
  warning(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'warning', settings);
  },
  fail(content: React.ReactNode, settings?: Settings) {
    return notice(content, 'error', settings);
  },
};
