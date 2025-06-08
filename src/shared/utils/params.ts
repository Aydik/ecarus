import { NavigateFunction, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const setParam = (name: string, value: string, navigate: NavigateFunction) => {
  const params = new URLSearchParams(window.location.search);

  if (value) {
    params.set(name, value);
  } else {
    params.delete(name);
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  navigate(newUrl, { replace: true });
};

export const deleteParam = (name: string, navigate: NavigateFunction) => {
  const params = new URLSearchParams(window.location.search);
  params.delete(name);

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  navigate(newUrl, { replace: true });
};

export const useUrlParamsChange = (callback: (path: string) => void) => {
  const location = useLocation();

  useEffect(() => {
    callback(location.search);
  }, [callback, location.search]);
};
