import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import { Typography } from 'shared/ui/Typography';
import styles from './index.module.scss';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';

interface Props {
  isOpened: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

export const ProductQrModal: FC<Props> = ({ isOpened, onClose, isSuccess }) => {
  const breakpoint = useBreakpoint();
  return (
    <Modal isOpened={isOpened} onClose={onClose} isCloseOnButton={true}>
      {isSuccess ? (
        <div
          className={styles.layout}
          style={{ width: breakpoint !== 'desktop' ? '100%' : '446px' }}
        >
          <Typography variant={'h3'} className={styles.label}>
            QR-код на покупку создан
          </Typography>
          <div>
            <Typography className={styles.text}>
              При оплате покажите его сотруднику на кассе
            </Typography>
            <img src={'/assets/images/qr.png'} alt={''} />
            <Typography variant={'p'} className={styles.code}>
              E25GHR0P
            </Typography>
            <Typography className={styles.text}>
              Если не получается отсканировать QR-код, введите код вручную или продиктуйте
              сотриднику на кассе
            </Typography>
          </div>
        </div>
      ) : (
        <Typography variant={'h3'}>Не удалось совершить покупку</Typography>
      )}
    </Modal>
  );
};
