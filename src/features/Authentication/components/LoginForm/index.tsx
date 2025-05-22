import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormType } from 'features/Authentication/types';
import { Button } from 'shared/ui/Button';
import { Typography } from 'shared/ui/Typography';
import styles from 'features/Authentication/styles/index.module.scss';
import { InputWithFormatter } from 'features/Authentication/components/ui/InputWithFormatter';
import { formatPhone } from 'features/Authentication/utils/phoneFormatter.ts';

interface LoginFormData {
  phone: string;
  password?: string;
}

interface Props {
  setFormType: (type: FormType) => void;
}

export const LoginForm: FC<Props> = ({ setFormType }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log('Форма отправлена:', data);
  };

  return (
    <>
      <Typography variant={'h4'} className={styles.title}>
        Вход
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGrid}>
          <InputWithFormatter
            name="phone"
            label="Телефон"
            type="tel"
            control={control}
            format={formatPhone}
            error={errors.phone}
            rules={{
              required: 'Телефон обязателен',
              validate: (value: string) => {
                const digitsOnly = value.replace(/\D/g, '');
                return digitsOnly.length === 11 || 'Неверный формат телефона';
              },
            }}
          />
          <InputWithFormatter
            name="password"
            label="Пароль"
            type="password"
            control={control}
            error={errors.password}
            rules={{
              required: 'Введите пароль',
              minLength: {
                value: 6,
                message: 'Пароль должен содержать минимум 6 символов',
              },
              validate: (value: string) => {
                const hasUpperCase = /[A-ZА-Я]/.test(value);
                const hasNumber = /\d/.test(value);

                if (!hasUpperCase) {
                  return 'Пароль должен содержать хотя бы одну заглавную букву';
                }
                if (!hasNumber) {
                  return 'Пароль должен содержать хотя бы одну цифру';
                }
                return true;
              },
            }}
          />
        </div>
        <Button style="primary" className={styles.button} type="submit">
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
        <Button
          key={'loginForPartners'}
          style={'secondary'}
          className={styles.button}
          onClick={() => setFormType('login')}
        >
          Вход для партнеров
        </Button>
      </form>
    </>
  );
};
