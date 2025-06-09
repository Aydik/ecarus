import { FC, ReactNode } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import clsx from 'clsx';

interface Props {
  id: string;
  checked?: boolean;
  onChange: (key: string) => void;
  children: ReactNode;
}

export const CheckBox: FC<Props> = ({ children, id, checked = false, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onChange(id)}
        className={styles.input}
      />
      <label htmlFor={id} className={styles.checkbox} aria-checked={checked}>
        <Icon
          name={`checkbox_${checked ? 'enabled' : 'disabled'}`}
          size={{ width: 20, height: 20 }}
        />
        <span className={clsx(styles.label, checked ? styles.label_checked : '')}>{children}</span>
      </label>
    </div>
  );
};
