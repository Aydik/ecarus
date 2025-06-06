import { FC, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from 'features/Authentication/components/LoginForm';
import { RegisterForm } from 'features/Authentication/components/RegisterForm';
import { FormLayout } from 'features/Authentication/layouts/FormLayout';
import Cookies from 'js-cookie';

export type FormType = 'login' | 'register' | 'confirm-email';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Authentication: FC<Props> = ({ isOpened, onClose }) => {
  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (token) onClose();
  }, [isOpened, onClose]);

  const [formType, setFormType] = useState<FormType>('login');
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <FormLayout>
        {formType === 'login' && <LoginForm setFormType={setFormType} onClose={onClose} />}
        {formType === 'register' && <RegisterForm setFormType={setFormType} onClose={onClose} />}
        {/*{formType === 'confirm-email' && <RegisterForm setFormType={setFormType} />}*/}
      </FormLayout>
    </Modal>
  );
};
