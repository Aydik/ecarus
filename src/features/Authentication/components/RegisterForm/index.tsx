import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormType } from 'features/Authentication/types';
import { Button } from 'shared/ui/Button';
import { Typography } from 'shared/ui/Typography';
import styles from 'features/Authentication/styles/index.module.scss';
import { InputWithFormatter } from 'features/Authentication/components/ui/InputWithFormatter';
import { formatPhone, formatPhoneBeforeRequest } from 'shared/utils/phoneFormatter.ts';
import { authUser, registerUser } from 'features/Authentication/services/auth.service.ts';

interface RegisterFormData {
  phone: string;
  email: string;
  firstname: string;
  lastname: string;
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
    setError,
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({
        login: formatPhoneBeforeRequest(data.phone),
        firstname: data.firstname,
        lastname: data.lastname,
        phone_number: formatPhoneBeforeRequest(data.phone),
        email: data.email,
        password: data.password,
      });
      await authUser({
        login: formatPhoneBeforeRequest(data.phone),
        password: data.password,
      });
      window.location.reload();
    } catch (e) {
      console.error('Ошибка авторизации:', e);
      setError('phone', {
        type: 'manual',
        message: 'Номер телефона или email уже используется',
      });
    }
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
            name="firstname"
            label="Имя"
            type="text"
            control={control}
            error={errors.firstname}
            rules={{
              required: 'Имя обязательно',
            }}
          />
          <InputWithFormatter<RegisterFormData>
            name="lastname"
            label="Фамилия"
            type="text"
            control={control}
            error={errors.lastname}
            rules={{
              required: 'Фамилия обязательна',
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
