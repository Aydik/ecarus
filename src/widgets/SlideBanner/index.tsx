import { FC, useRef, useEffect } from 'react';
import styles from './index.module.scss';
import { SlideButton } from './components/ui/SlideButton';
import { SlideItem } from './components/SlideItem';
import { SLIDES } from './constants';
import { useSlideBanner } from './hooks/useSlideBanner.ts';
import clsx from 'clsx';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

export const SlideBanner: FC = () => {
  const breakpoint = useBreakpoint();
  const { offset, isAnimating, visibleSlides, navigate } = useSlideBanner(SLIDES);

  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemsRef.current) {
      itemsRef.current.style.transform = `translateX(${offset}%)`;
      itemsRef.current.style.transition = isAnimating ? 'transform 0.5s ease-in-out' : 'none';
    }
  }, [offset, isAnimating]);

  useEffect(() => {
    if (breakpoint === 'mobile') {
      const intervalId = setInterval(() => {
        navigate('next');
      }, 7000);

      return () => clearInterval(intervalId);
    }
  }, [breakpoint]);

  return (
    <div
      className={styles.slideBanner}
      style={{
        height: breakpoint === 'mobile' ? '425px' : '320px',
        position: breakpoint === 'mobile' ? 'absolute' : 'relative',
      }}
    >
      <div
        className={styles.slideBanner__content}
        style={{ borderRadius: breakpoint === 'mobile' ? '0' : '24px' }}
      >
        <div ref={itemsRef} className={styles.slideBanner__items}>
          {visibleSlides.map((slide, index) => (
            <SlideItem key={index} item={slide} />
          ))}
        </div>
      </div>
      {breakpoint !== 'mobile' && (
        <>
          <SlideButton
            onClick={() => navigate('prev')}
            className={clsx(styles.slideButton, styles.slideButton_prev)}
          />
          <SlideButton
            onClick={() => navigate('next')}
            className={clsx(styles.slideButton, styles.slideButton_next)}
            reversed={true}
          />
        </>
      )}
    </div>
  );
};
