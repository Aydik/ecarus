import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  maxHeight: number | string;
  className?: string;
  style?: CSSProperties;
  scrollBar?: boolean;
  topShadow?: boolean;
}

export const Scrollbar: FC<Props> = ({
  children,
  maxHeight,
  className,
  style,
  scrollBar = true,
  topShadow = true,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolledTop, setIsScrolledTop] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setIsScrolledTop(el.scrollTop > 0);
  };

  useEffect(() => {
    handleScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={clsx(styles.scrollbarWrapper, className)} style={{ ...style }}>
      {topShadow && isScrolledTop && <div className={styles.gradientTop} />}
      <div
        ref={scrollRef}
        className={clsx(styles.scrollbar, !scrollBar && styles.scrollbar_noScrollbar)}
        style={{ maxHeight }}
      >
        {children}
      </div>
    </div>
  );
};
