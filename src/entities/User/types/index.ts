export interface User {
  id: string;
  photo_url: string | null;
  firstname: string | null;
  lastname: string | null;
  username: string | null;
  email: string | null;
  password: string;
  balance: number;
  role: 'USER' | 'ADMIN' | 'POINT' | 'SHOP';
}
