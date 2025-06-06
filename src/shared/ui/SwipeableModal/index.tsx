import { FC, ReactNode, useEffect, useRef, useState, TouchEvent } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import ReactDOM from 'react-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const SwipeableModal: FC<Props> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const getBackgroundOpacity = (): number => {
    if (!modalRef.current) return 0;

    const modalHeight = modalRef.current.clientHeight;
    const progress = 1 - Math.min(1, Math.max(0, currentY / modalHeight));
    return progress * 0.5;
  };

  const animateClose = () => {
    setIsAnimating(true);
    setCurrentY(modalRef.current?.clientHeight || window.innerHeight);

    setTimeout(() => {
      setCurrentY(0);
      setIsHidden(true);
      setTimeout(() => setIsAnimating(false), 300);
    }, 300);
  };

  const animateOpen = () => {
    setIsHidden(false);
    setCurrentY(window.innerHeight);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentY(0);
      setTimeout(() => setIsAnimating(false), 300);
    }, 10);
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (contentRef.current && contentRef.current.contains(e.target as Node)) {
      return;
    }

    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !modalRef.current) return;
    const y = e.touches[0].clientY;
    const delta = y - startY;

    if (delta > 0) {
      setCurrentY(delta);
    }
  };

  const handleTouchEnd = () => {
    if (!modalRef.current) return;
    const closeThreshold = modalRef.current.clientHeight * 0.3;

    if (currentY > closeThreshold) {
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
      animateOpen();
    } else {
      animateClose();
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    isHidden ? null : (
      <div className={styles.overlay} ref={overlayRef}>
        <div
          className={styles.background}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          style={{ backgroundColor: `rgba(0, 0, 0, ${getBackgroundOpacity()})` }}
        />
        <div
          className={clsx(styles.modal, {
            [styles.dragging]: isDragging,
            [styles.animating]: isAnimating,
          })}
          ref={modalRef}
          style={{
            transform: `translateY(${currentY}px)`,
          }}
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
    ),
    document.getElementById('modal-root')!,
  );
};
