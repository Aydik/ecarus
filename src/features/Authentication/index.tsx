import { FC, useState } from 'react';
import { FormType } from 'features/Authentication/types';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from 'features/Authentication/components/LoginForm';
import { RegisterForm } from 'features/Authentication/components/RegisterForm';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Authentication: FC<Props> = ({ isOpened, onClose }) => {
  const [formType, setFormType] = useState<FormType>('login');
  return (
    <Modal isOpened={isOpened} onClose={onClose} style={{ width: 384 }}>
      {formType === 'login' && <LoginForm setFormType={setFormType} />}
      {formType === 'register' && <RegisterForm setFormType={setFormType} />}
    </Modal>
  );
};
