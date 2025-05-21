import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormType } from 'features/Authentication/types';
import { Button } from 'shared/ui/Button';
import { Typography } from 'shared/ui/Typography';
import styles from 'features/Authentication/styles/index.module.scss';
import { Input } from 'src/features/Authentication/components/ui/Input';

interface LoginFormData {
  phone: string;
  password?: string;
}

interface Props {
  setFormType: (type: FormType) => void;
}

export const LoginForm: FC<Props> = ({ setFormType }) => {
  const {
    // register,
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
          <Input
            name="phone"
            label="Телефон"
            mask="+7 (999) 999-99-99"
            control={control}
            error={errors.phone}
            rules={{
              required: 'Телефон обязателен',
              validate: (value: string) => {
                const digitsOnly = value.replace(/\D/g, '');
                return digitsOnly.length === 11 || 'Неверный формат телефона';
              },
            }}
          />
          {/*  <div className={styles.inputContainer}>*/}
          {/*    <div*/}
          {/*      className={clsx(styles.inputWrapper, errors.phone ? styles.inputWrapper_error : '')}*/}
          {/*    >*/}
          {/*      <input*/}
          {/*        type="password"*/}
          {/*        id="password"*/}
          {/*        placeholder=" "*/}
          {/*        {...register('password', {*/}
          {/*          required: 'Введите пароль',*/}
          {/*        })}*/}
          {/*        className={styles.inputField}*/}
          {/*      />*/}
          {/*      <label htmlFor="password" className={styles.floatingLabel}>*/}
          {/*        Пароль*/}
          {/*      </label>*/}
          {/*    </div>*/}
          {/*    {errors.password?.message && (*/}
          {/*      <Typography variant={'p'} className={styles.inputErrorMessage}>*/}
          {/*        {String(errors.password.message)}*/}
          {/*      </Typography>*/}
          {/*    )}*/}
          {/*  </div>*/}
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
