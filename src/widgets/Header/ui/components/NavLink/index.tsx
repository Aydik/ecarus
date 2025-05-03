import { FC } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { INavLink } from 'shared/interfaces/NavLink.ts';
import { Typography } from 'shared/ui/Typography';

interface Props extends INavLink {
  selected?: boolean;
}

export const NavLink: FC<Props> = ({ url, text, selected = false }: Props) => {
  return (
    <Link to={url} className={`${styles.navLink} ${selected ? styles.navLink_selected : ''}`}>
      <Typography className={styles.text}>{text}</Typography>
      {selected && <div className={styles.rectangle} />}
    </Link>
  );
};
