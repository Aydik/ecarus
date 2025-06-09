import { ChangeEventHandler, FC } from 'react';
import './index.module.scss';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';

interface Props {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar: FC<Props> = ({ value, handleChange }) => {
  return (
    <div className={styles.searchbar}>
      <Icon name={'loupe'} size={{ width: 16, height: 16 }} />
      <div className={styles.inputWrapper}>
        <input
          id={'searchBar'}
          value={value || ''}
          onChange={handleChange}
          placeholder={' '}
          className={styles.inputField}
        />
        <label htmlFor={'searchBar'} className={styles.floatingLabel}>
          Поиск
        </label>
      </div>
    </div>
  );
};
