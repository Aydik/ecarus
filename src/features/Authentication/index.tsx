import { FC, useState } from 'react';
import { FormType } from 'features/Authentication/types';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from 'features/Authentication/components/LoginForm';
import { RegisterForm } from 'features/Authentication/components/RegisterForm';
import { FormLayout } from 'features/Authentication/layouts/FormLayout';

interface Props {
  isOpened: boolean;
  onClose: () => void;
}

export const Authentication: FC<Props> = ({ isOpened, onClose }) => {
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
