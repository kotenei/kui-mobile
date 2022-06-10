import React from 'react';
import classnames from 'classnames';
import MessageContent from './MessageContent';
import { Notification } from '../Notification';
import { guid } from '../../utils';

const defaultSettings: Settings = {
  key: 'message',
  duration: 1500,
  color: 'primary',
  onClose: () => {},
};
let instance;

interface Settings {
  key?: string;
  duration?: number;
  color?: KUI.ColorTypes;
  onClose?: () => void;
}

const notice = (content: React.ReactNode, settings?: Settings) => {
  const options = { ...defaultSettings, ...settings };
  const container = <MessageContent color={options.color}>{content}</MessageContent>;

  if (!content) {
    return;
  }

  if (instance) {
    instance.destory();
    instance = null;
  }

  instance = Notification.newInstance({
    transitionName: 'message',
  });

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

export default function(content, settings?) {
  return notice(content, settings);
}
