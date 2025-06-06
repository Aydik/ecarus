import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'shared/ui/Button';
import { Typography } from 'shared/ui/Typography';
import styles from 'features/Authentication/styles/index.module.scss';
import { InputWithFormatter } from 'features/Authentication/components/ui/InputWithFormatter';
import { authUser } from 'features/Authentication/services/auth.service.ts';
import { AxiosError } from 'axios';
import { LoginUserDto } from 'app/models/generated';
import { FormType } from 'features/Authentication';

interface Props {
  setFormType: (type: FormType) => void;
  onClose: () => void;
}

export const LoginForm: FC<Props> = ({ setFormType, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<LoginUserDto>();

  const onSubmit = async (data: LoginUserDto) => {
    try {
      await authUser({
        email: data.email,
        password: data.password,
      });
      onClose();
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        setError('password', {
          type: 'manual',
          message: 'Неверный email или пароль',
        });
      } else {
        console.error('Ошибка авторизации:', error);
      }
    }
  };

  return (
    <>
      <Typography variant={'h4'} className={styles.title}>
        Вход
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputGrid}>
          <InputWithFormatter<LoginUserDto>
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
          <InputWithFormatter<LoginUserDto>
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
            }}
          />
        </div>
        <Button variant="primary" className={styles.button} type="submit">
          Войти
        </Button>
        <div className={styles.linkContainer}>
          <button type="button" className={styles.link}>
            Войти с помощью смс
          </button>
          <button type="button" className={styles.link} onClick={() => setFormType('register')}>
            Регистрация
          </button>
        </div>
        <Button key={'loginForPartners'} variant={'secondary'} className={styles.button}>
          Вход для партнеров
        </Button>
      </form>
    </>
  );
};
