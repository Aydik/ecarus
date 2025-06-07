import { FC } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { NavLink as NavLinkType } from 'shared/types';
import { Typography } from 'shared/ui/Typography';
import clsx from 'clsx';

interface Props extends NavLinkType {
  isSelected?: boolean;
}

export const NavLink: FC<Props> = ({ url, text, isSelected = false }: Props) => {
  return (
    <Link to={url} className={clsx(styles.navLink, isSelected ? styles.navLink_selected : '')}>
      <Typography className={styles.text}>{text}</Typography>
      <div className={styles.rectangleWrapper}>
        <div className={styles.rectangle} />
      </div>
    </Link>
  );
};
