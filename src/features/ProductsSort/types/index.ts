export const SORT_TYPES = ['По популярности', 'По цене', 'По новизне'] as const;
export type Sort = (typeof SORT_TYPES)[number] | null;

export interface SortState {
  sortBy: Sort;
}
