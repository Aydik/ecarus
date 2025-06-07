import { FC, ReactNode, useState } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import clsx from 'clsx';

interface Props {
  id: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: ReactNode;
}

export const CheckBox: FC<Props> = ({ children, id, checked = false }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          // onChange(isChecked);
        }}
        className={styles.input}
      />
      <label htmlFor={id} className={styles.checkbox} aria-checked={isChecked}>
        <Icon
          name={`checkbox_${isChecked ? 'enabled' : 'disabled'}`}
          size={{ width: 20, height: 20 }}
        />
        <span className={clsx(styles.label, isChecked ? styles.label_checked : '')}>
          {children}
        </span>
      </label>
    </div>
  );
};
