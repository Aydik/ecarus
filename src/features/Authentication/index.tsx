import { FC, useEffect, useState } from 'react';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from 'features/Authentication/components/LoginForm';
import { RegisterForm } from 'features/Authentication/components/RegisterForm';
import { FormLayout } from 'features/Authentication/layouts/FormLayout';
import { getUser } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';
import { setIsOpened } from 'features/Authentication/slice';

export type FormType = 'login' | 'register' | 'confirm-email';

export const Authentication: FC = () => {
  const isOpened = useSelector((state: RootState) => state.auth.isOpened);
  const dispatch: AppDispatch = useDispatch();
  const onClose = () => dispatch(setIsOpened(false));

  useEffect(() => {
    getUser().then(() => onClose());
  }, [isOpened, onClose]);

  const [formType, setFormType] = useState<FormType>('login');
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <FormLayout>
        {formType === 'login' && <LoginForm setFormType={setFormType} onClose={onClose} />}
        {formType === 'register' && <RegisterForm setFormType={setFormType} onClose={onClose} />}
      </FormLayout>
    </Modal>
  );
};
