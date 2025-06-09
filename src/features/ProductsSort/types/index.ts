export const SORT_TYPES = {
  popularity: 'По популярности',
  price: 'По цене',
  newness: 'По новизне',
} as const;

export type Sort = keyof typeof SORT_TYPES | null;
