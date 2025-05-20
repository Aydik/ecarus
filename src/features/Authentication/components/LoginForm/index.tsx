import { FC } from 'react';
import { FormType } from 'features/Authentication/types';

interface Props {
  setFormType: (type: FormType) => void;
}

export const LoginForm: FC<Props> = ({ setFormType }) => {
  return <button onClick={() => setFormType('register')}>регистрация</button>;
};
