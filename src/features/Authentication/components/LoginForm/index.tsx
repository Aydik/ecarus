import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormType } from 'features/Authentication/types';
import { FormLayout } from 'features/Authentication/layouts/FormLayout';
import { Button } from 'shared/ui/Button';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';

interface Props {
  setFormType: (type: FormType) => void;
}

export const LoginForm: FC<Props> = ({ setFormType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log('Форма отправлена:', data);
  };

  return (
    <FormLayout>
      <Typography variant={'h4'} className={styles.title}>
        Вход
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGrid}>
          <div className={styles.inputContainer}>
            <input
              type="tel"
              placeholder="Телефон"
              {...register('phone', {
                required: 'Телефон обязателен',
                pattern: {
                  value: /^\+?[0-9]{10,14}$/,
                  message: 'Неверный формат телефона',
                },
              })}
              style={errors.phone?.message ? { border: '#FF4545 2px solid' } : {}}
            />
            {errors.phone?.message && (
              <Typography variant={'p'} className={styles.inputError}>
                {String(errors.phone.message)}
              </Typography>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Пароль"
              {...register('password', {
                required: 'Введите пароль',
              })}
              style={errors.password?.message ? { border: '#FF4545 2px solid' } : {}}
            />
            {errors.password?.message && (
              <Typography variant={'p'} className={styles.inputError}>
                {String(errors.password.message)}
              </Typography>
            )}
          </div>
        </div>
        <Button style={'primary'} className={styles.button} onClick={() => setFormType('login')}>
          Войти
        </Button>
        <div className={styles.linkContainer}>
          <button type="button" className={styles.link}>
            Войти с помощью смс
          </button>
          <button type="button" className={styles.link}>
            Регистрация
          </button>
        </div>
        <Button style={'secondary'} className={styles.button} onClick={() => setFormType('login')}>
          Вход для партнеров
        </Button>
      </form>
    </FormLayout>
  );
};
