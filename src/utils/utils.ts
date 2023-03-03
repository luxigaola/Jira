import { useEffect, useState } from 'react';

export const clearObject = <T>(obj: T) => {
  const param = { ...obj };
  for (const key in param) {
    if (Object.prototype.hasOwnProperty.call(param, key)) {
      if (param[key] !== 0 && !param[key]) {
        delete param[key];
      }
    }
  }
  return param;
};

export const useMount = (callback: Function) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <T>(value: T, delay: number = 5000) => {
  const [debounceValue, setDebounceValue] = useState(value);
  // let timeout:NodeJS.Timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debounceValue;
};
