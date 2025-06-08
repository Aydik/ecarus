import { FilterFlags } from 'features/ProductsFilters/types';
import { useEffect } from 'react';
import { NavigateFunction, useLocation } from 'react-router-dom';

export const updateFilters = (
  filterFlags: FilterFlags,
  name: string,
  navigate: NavigateFunction,
) => {
  const selected = Object.entries(filterFlags)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const params = new URLSearchParams(window.location.search);

  if (selected.length) {
    params.set(name, selected.join(','));
  } else {
    params.delete(name);
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  navigate(newUrl, { replace: true });
};

export const resetFilters = (navigate: NavigateFunction) => {
  const params = new URLSearchParams(window.location.search);

  const names = ['genders', 'types', 'brands'];
  names.forEach((name) => {
    params.delete(name);
  });

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  navigate(newUrl, { replace: true });
};

export const useUrlParamsChange = (callback: (path: string) => void) => {
  const location = useLocation();

  useEffect(() => {
    callback(location.search);
  }, [location.search]);
};
