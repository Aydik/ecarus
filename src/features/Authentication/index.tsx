import { FC, useEffect, useState } from 'react';
import { FormType } from 'features/Authentication/types';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from 'features/Authentication/components/LoginForm';
import { RegisterForm } from 'features/Authentication/components/RegisterForm';
import { FormLayout } from 'features/Authentication/layouts/FormLayout';
import { getProfile } from 'entities/User/services/user.servise.ts';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Authentication: FC<Props> = ({ isOpened, onClose }) => {
  useEffect(() => {
    getProfile().then(() => {
      onClose();
    });
  }, [isOpened]);

  const [formType, setFormType] = useState<FormType>('login');
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <FormLayout>
        {formType === 'login' && <LoginForm setFormType={setFormType} />}
        {formType === 'register' && <RegisterForm setFormType={setFormType} />}
      </FormLayout>
    </Modal>
  );
};
