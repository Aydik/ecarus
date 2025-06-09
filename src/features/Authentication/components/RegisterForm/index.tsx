import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormType } from 'features/Authentication';
import { Button } from 'shared/ui/Button';
import { Typography } from 'shared/ui/Typography';
import styles from 'features/Authentication/styles/index.module.scss';
import { InputWithFormatter } from 'features/Authentication/components/ui/InputWithFormatter';
import { registerUser } from 'features/Authentication/services/auth.service.ts';
import { AxiosError } from 'axios';
import { CreateUserDto, LanguageEnum } from 'app/models/generated';
import { setUser } from 'entities/User/slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/store';

interface RegisterFormFields extends CreateUserDto {
  confirmPassword: string;
}

interface Props {
  setFormType: (type: FormType) => void;
  onClose: () => void;
}

export const RegisterForm: FC<Props> = ({ setFormType, onClose }) => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setError,
  } = useForm<RegisterFormFields>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (data: RegisterFormFields) => {
    try {
      const res = await registerUser({
        email: data.email,
        password: data.password,
        language: LanguageEnum.RU,
      });
      dispatch(setUser(res));
      onClose();
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 400) {
        setError('email', {
          type: 'manual',
          message: 'Email уже используется',
        });
      } else {
        console.error('Ошибка регистрации:', error);
      }
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
          <InputWithFormatter<RegisterFormFields>
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
          <InputWithFormatter<RegisterFormFields>
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
          <InputWithFormatter<RegisterFormFields>
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
        <Button variant="primary" className={styles.button} type="submit">
          Зарегистрироваться
        </Button>
        <div className={styles.linkContainer}>
          <button type="button" className={styles.link} onClick={() => setFormType('login')}>
            Я уже зарегистрировался(-ась)
          </button>
        </div>
        <Button key={'loginForPartners'} variant={'secondary'} className={styles.button}>
          Вход для партнеров
        </Button>
      </form>
    </>
  );
};
