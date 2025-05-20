import { FC } from 'react';
import { FormType } from 'features/Authentication/types';

interface Props {
  setFormType: (type: FormType) => void;
}

export const RegisterForm: FC<Props> = ({ setFormType }) => {
  return <button onClick={() => setFormType('login')}>логин</button>;
};
