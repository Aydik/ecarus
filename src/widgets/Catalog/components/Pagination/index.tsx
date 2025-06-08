import { FC } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { setParam } from 'shared/utils/params.ts';
import { useNavigate } from 'react-router-dom';

interface Props {
  current: number;
  totalPages: number;
}

export const Pagination: FC<Props> = ({ current, totalPages }) => {
  const navigate = useNavigate();
  const generatePages = () => {
    const pages: (number | 'start-ellipsis' | 'end-ellipsis')[] = [];
    const neighbors = 1;

    if (totalPages <= 1) return pages;
    pages.push(0);
    if (current > neighbors + 1) {
      pages.push('start-ellipsis');
    }

    for (
      let i = Math.max(1, current - neighbors);
      i <= Math.min(totalPages - 2, current + neighbors);
      i++
    ) {
      pages.push(i);
    }

    if (current < totalPages - neighbors - 2) {
      pages.push('end-ellipsis');
    }
    if (totalPages > 1) {
      pages.push(totalPages - 1);
    }
    return pages;
  };

  const pages = generatePages();

  const onPageChange = (newPage: number) => {
    setParam('page', newPage.toString(), navigate);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (totalPages > 1)
    return (
      <div className={styles.pagination}>
        {pages.map((iPage) =>
          iPage === 'start-ellipsis' || iPage === 'end-ellipsis' ? (
            <span key={iPage} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <button
              key={iPage}
              onClick={() => onPageChange(iPage as number)}
              className={clsx(styles.page, {
                [styles.page_active]: current === iPage,
              })}
            >
              {(iPage as number) + 1}
            </button>
          ),
        )}
      </div>
    );
};
