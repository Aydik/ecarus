import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormType } from 'features/Authentication/types';
import { Button } from 'shared/ui/Button';
import { Typography } from 'shared/ui/Typography';
import styles from 'features/Authentication/styles/index.module.scss';
import { InputWithFormatter } from 'features/Authentication/components/ui/InputWithFormatter';
import { formatPhone } from 'features/Authentication/utils/phoneFormatter.ts';

interface RegisterFormData {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  setFormType: (type: FormType) => void;
}

export const RegisterForm: FC<Props> = ({ setFormType }) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log('Форма регистрации отправлена:', data);
  };

  const passwordValue = watch('password');

  return (
    <>
      <Typography variant="h4" className={styles.title}>
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGrid}>
          <InputWithFormatter<RegisterFormData>
            name="firstName"
            label="Имя"
            type="text"
            control={control}
            error={errors.firstName}
            rules={{
              required: 'Имя обязательно',
            }}
          />
          <InputWithFormatter<RegisterFormData>
            name="lastName"
            label="Фамилия"
            type="text"
            control={control}
            error={errors.lastName}
            rules={{
              required: 'Фамилия обязательна',
            }}
          />
          <InputWithFormatter<RegisterFormData>
            name="username"
            label="Отображаемое имя"
            type="text"
            control={control}
            error={errors.username}
            rules={{
              required: 'Username обязателен',
              minLength: {
                value: 4,
                message: 'Username должен содержать минимум 4 символа',
              },
            }}
          />
          <InputWithFormatter<RegisterFormData>
            name="phone"
            label="Телефон"
            type="tel"
            control={control}
            format={formatPhone}
            error={errors.phone}
            rules={{
              required: 'Телефон обязателен',
              validate: (value: string | undefined) => {
                if (!value) return false;
                const digitsOnly = value.replace(/\D/g, '');
                return digitsOnly.length === 11 || 'Неверный формат телефона';
              },
            }}
          />
          <InputWithFormatter<RegisterFormData>
            name="email"
            label="Email"
            type="email"
            control={control}
            error={errors.email}
            rules={{
              required: 'Email обязателен',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Неверный формат email',
              },
            }}
          />
          <InputWithFormatter<RegisterFormData>
            name="password"
            label="Пароль"
            type="password"
            control={control}
            error={errors.password}
            rules={{
              required: 'Пароль обязателен',
              minLength: {
                value: 6,
                message: 'Пароль должен содержать минимум 6 символов',
              },
              validate: (value: string | undefined) => {
                if (!value) return false;
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
          <InputWithFormatter<RegisterFormData>
            name="confirmPassword"
            label="Подтверждение пароля"
            type="password"
            control={control}
            error={errors.confirmPassword}
            rules={{
              required: 'Подтвердите пароль',
              validate: (value: string | undefined) => {
                return value === passwordValue || 'Пароли не совпадают';
              },
            }}
          />
        </div>
        <Button style="primary" className={styles.button} type="submit">
          Зарегистрироваться
        </Button>
        <div className={styles.linkContainer}>
          <button type="button" className={styles.link} onClick={() => setFormType('login')}>
            Я уже зарегистрировался(-ась)
          </button>
        </div>
      </form>
    </>
  );
};
