export interface Contact {
  title: string;
  icon: string;
  toCopy: string;
}

export interface NavLink {
  url: string;
  text: string;
}

export const CATEGORIES = ['Обувь', 'Одежда', 'Аксессуары'] as const;
export type Category = (typeof CATEGORIES)[number];
export const GENDERS = ['Мужской', 'Женский'] as const;
export type Gender = (typeof GENDERS)[number];
export const BRANDS = ['K&B', 'NIKE', 'ADIDAS', 'H&M', 'Puma', 'Reebok'] as const;
export type Brand = (typeof BRANDS)[number];
