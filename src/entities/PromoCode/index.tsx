import { FC } from 'react';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { Button } from 'shared/ui/Button';
import { PromoCode as PromoCodeType } from 'entities/PromoCode/types';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

export type { PromoCodeType };

interface Props {
  promoCode: PromoCodeType;
}

export const PromoCode: FC<Props> = ({ promoCode }) => {
  const { amount, date, link, isActive = false } = promoCode;
  const isDesktop = useBreakpoint() === 'desktop';
  return (
    <div
      className={styles.promoCode}
      style={{
        flexDirection: isDesktop ? 'row' : 'column',
        alignItems: isDesktop ? 'center' : 'stretch',
      }}
    >
      <div className={styles.promoCode__image}>
        <img
          src={`/assets/images/vector/promoCode${isActive ? '_active' : ''}.svg`}
          alt="Промокод"
          style={{
            height: isDesktop ? '100%' : 'auto',
            width: isDesktop ? 'auto' : '100%',
          }}
        />
        <Typography variant={'p'} className={styles.amount}>
          <strong>{amount}</strong> ₽
        </Typography>
      </div>
      <div
        className={styles.promoCode__content}
        style={{
          flexDirection: isDesktop ? 'row' : 'column',
          alignItems: isDesktop ? 'center' : 'stretch',
        }}
      >
        <div className={styles.info}>
          <div>
            <Typography className={styles.label}>Дата Создания:</Typography>
            <Typography className={styles.date}>{date}</Typography>
          </div>
          <div>
            <Typography className={styles.label}>Ссылка на товар:</Typography>
            <a href={link} className={styles.link}>
              {link}
            </a>
          </div>
        </div>
        {isActive && (
          <Button variant={'secondary'} className={styles.button} bold={false}>
            Показать qr-код
          </Button>
        )}
      </div>
    </div>
  );
};
