import { FC } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { NavLink as NavLinkType } from 'shared/types';
import { Typography } from 'shared/ui/Typography';

interface Props extends NavLinkType {
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
