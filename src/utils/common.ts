import { get } from 'lodash';
import { MESSAGE_ERR } from './constants';

/* eslint-disable no-console */
export const logger = {
  log: (...message: any) => {
    if (__DEV__) {
      console.log(...message);
    }
  },
};

export const getMessageError = (error: unknown, path = 'message'): string => {
  return get(error, path, MESSAGE_ERR);
};
