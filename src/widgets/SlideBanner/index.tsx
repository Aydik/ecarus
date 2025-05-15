import { FC, useRef, useEffect } from 'react';
import styles from './index.module.scss';
import { SlideButton } from './components/ui/SlideButton';
import { SlideItem } from './components/SlideItem';
import { SLIDES } from './constants';
import { useSlideBanner } from './hooks/useSlideBanner.ts';

export const SlideBanner: FC = () => {
  const { offset, isAnimating, visibleSlides, navigate } = useSlideBanner(SLIDES);

  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemsRef.current) {
      itemsRef.current.style.transform = `translateX(${offset}%)`;
      itemsRef.current.style.transition = isAnimating ? 'transform 0.5s ease-in-out' : 'none';
    }
  }, [offset, isAnimating]);

  return (
    <div className={styles.slideBanner}>
      <div className={styles.slideBanner__content}>
        <div ref={itemsRef} className={styles.slideBanner__items}>
          {visibleSlides.map((slide, index) => (
            <SlideItem key={index} item={slide} />
          ))}
        </div>
      </div>
      <SlideButton
        onClick={() => navigate('prev')}
        className={`${styles.slideButton} ${styles.slideButton_prev}`}
      />
      <SlideButton
        onClick={() => navigate('next')}
        className={`${styles.slideButton} ${styles.slideButton_next}`}
        reversed={true}
      />
    </div>
  );
};
