import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import styles from './index.module.scss';
import clsx from 'clsx';
import { Typography } from 'shared/ui/Typography';

interface InputWithFormatterProps {
  name: string;
  label: string;
  control: Control<any>;
  format?: (value: string) => string;
  error?: FieldError;
  rules?: object;
  type?: string;
  placeholder?: string;
}

export const InputWithFormatter: React.FC<InputWithFormatterProps> = ({
  name,
  label,
  control,
  format,
  error,
  rules,
  type = 'text',
  placeholder = ' ',
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange, onBlur, ref } }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const inputVal = e.target.value;
          if (format) {
            onChange(format(inputVal));
          } else {
            onChange(inputVal);
          }
        };

        return (
          <div className={styles.inputContainer}>
            <div className={clsx(styles.inputWrapper, error && styles.inputWrapper_error)}>
              <input
                id={name}
                type={type}
                value={value || ''}
                onChange={handleChange}
                onBlur={onBlur}
                ref={ref}
                placeholder={placeholder}
                className={styles.inputField}
              />
              <label htmlFor={name} className={styles.floatingLabel}>
                {label}
              </label>
            </div>
            {error?.message && (
              <Typography variant="p" className={styles.inputErrorMessage}>
                {String(error.message)}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
};
