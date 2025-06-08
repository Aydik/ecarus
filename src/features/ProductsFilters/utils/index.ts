import { FilterFlags } from 'shared/types';
import { NavigateFunction } from 'react-router-dom';
import { deleteParam, setParam } from 'shared/utils/params.ts';

export const updateFilter = (
  filterFlags: FilterFlags,
  name: string,
  navigate: NavigateFunction,
) => {
  const selected = Object.entries(filterFlags)
    .filter(([, value]) => value)
    .map(([key]) => key);

  if (selected.length) {
    setParam(name, selected.join(','), navigate);
  } else {
    deleteParam(name, navigate);
  }
};

export const resetFilters = (navigate: NavigateFunction) => {
  const filters = ['genders', 'types', 'brands'];
  filters.forEach((name) => {
    deleteParam(name, navigate);
  });
};
