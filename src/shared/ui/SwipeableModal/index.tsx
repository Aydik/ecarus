import { FC, ReactNode, useEffect, useRef, useState, TouchEvent } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const SwipeableModal: FC<Props> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTouchStart = (e: TouchEvent) => {
    if (contentRef.current && contentRef.current.contains(e.target as Node)) {
      return;
    }

    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const y = e.touches[0].clientY;
    const delta = y - startY;

    if (delta > 0) {
      e.preventDefault();
      setCurrentY(delta);
    }
  };

  const handleTouchEnd = () => {
    if (currentY > 100) {
      onClose();
    } else {
      setIsAnimating(true);
      setCurrentY(0);
      setTimeout(() => setIsAnimating(false), 300);
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentY(window.innerHeight);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentY(0);
        setTimeout(() => setIsAnimating(false), 300);
      }, 10);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div
        className={clsx(styles.modal, {
          [styles.dragging]: isDragging,
          [styles.animating]: isAnimating,
        })}
        ref={modalRef}
        style={{ transform: `translateY(${currentY}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.dragHandle}>
          <div className={styles.dragIndicator} />
        </div>
        <div className={styles.content} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
