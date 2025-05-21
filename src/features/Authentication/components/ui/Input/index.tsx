import { FC, HTMLInputTypeAttribute } from 'react';
import {
  Controller,
  Control,
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
} from 'react-hook-form';
// import InputMask from 'react-input-mask';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';

interface InputProps {
  name: string;
  label: string;
  control: Control<any>;
  mask?: string;
  rules?: RegisterOptions;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  type?: HTMLInputTypeAttribute;
}

export const Input: FC<InputProps> = ({
  name,
  label,
  control,
  mask,
  rules,
  error,
  type = 'text',
}) => {
  return (
    <div className={styles.inputContainer}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field }) => (
          <div className={clsx(styles.inputWrapper, error && styles.inputWrapper_error)}>
            {mask ? (
              // <InputMask
              //   mask={mask}
              //   maskChar=" "
              //   value={field.value || ''}
              //   onChange={field.onChange}
              //   onBlur={field.onBlur}
              // >
              //   {(inputProps: any) => (
              //     <input
              //       {...inputProps}
              //       type={type}
              //       placeholder=" "
              //       id={name}
              //       ref={field.ref}
              //       className={styles.inputField}
              //     />
              //   )}
              // </InputMask>
              <input
                id={name}
                type={type}
                placeholder=" "
                className={styles.inputField}
                {...field}
              />
            ) : (
              <input
                id={name}
                type={type}
                placeholder=" "
                className={styles.inputField}
                {...field}
              />
            )}
            <label htmlFor={name} className={styles.floatingLabel}>
              {label}
            </label>
          </div>
        )}
      />
      {error?.message && (
        <Typography variant="p" className={styles.inputErrorMessage}>
          {String(error.message)}
        </Typography>
      )}
    </div>
  );
};
