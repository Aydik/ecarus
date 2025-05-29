import { FC, useState } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Menu } from 'widgets/Header/components/Menu';

export const MenuButton: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  return (
    <>
      <button className={styles.menuButton} onClick={() => setIsMenuOpened(true)}>
        <Icon name={'menu'} />
      </button>
      <Menu isOpened={isMenuOpened} onClose={() => setIsMenuOpened(false)} />
    </>
  );
};
