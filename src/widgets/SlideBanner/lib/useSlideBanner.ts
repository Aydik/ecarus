import { useState } from 'react';
import { ISlideItem } from '../model/types';

export const useSlideBanner = (items: ISlideItem[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(-33.33);
  const [isAnimating, setIsAnimating] = useState(false);

  const getAdjacentItems = (): ISlideItem[] => {
    if (items.length === 0) return [];

    const totalItems = items.length;
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;

    return [items[prevIndex], items[currentIndex], items[nextIndex]];
  };

  const visibleSlides = getAdjacentItems();

  const navigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return;

    setIsAnimating(true);
    setOffset(direction === 'prev' ? 0 : -66.66);

    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev + (direction === 'prev' ? -1 : 1) + items.length) % items.length,
      );
      setOffset(-33.33);
      setIsAnimating(false);
    }, 500);
  };

  return {
    currentIndex,
    offset,
    isAnimating,
    visibleSlides,
    navigate,
  };
};
