export interface Contact {
  title: string;
  icon: string;
  toCopy: string;
}

export interface NavLink {
  url: string;
  text: string;
}

export type FilterFlags = Record<string, boolean>;
