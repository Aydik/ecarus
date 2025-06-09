import { FC, Fragment } from 'react';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { Provision as ProvisionType } from 'entities/Provision/types';
import { Amount } from 'shared/ui/Amount';
import clsx from 'clsx';

export type { ProvisionType };

interface Props {
  provision: ProvisionType;
}

export const Provision: FC<Props> = ({ provision }) => {
  const { address, materials, date, amount } = provision;

  const isDesktop = useBreakpoint() === 'desktop';

  return (
    <div
      className={styles.provision}
      style={
        isDesktop
          ? {
              gridTemplateColumns: 'minmax(0, 1fr) auto',
            }
          : {
              gridTemplateRows: 'minmax(0, 1fr) auto',
            }
      }
    >
      <div className={styles.provision__content}>
        <div className={styles.info}>
          <Typography className={styles.label}>Адрес</Typography>
          <Typography className={clsx(styles.text, styles.ellipsis)}>{address}</Typography>
        </div>
        <div className={styles.info}>
          <Typography className={styles.label}>Материалы</Typography>
          <div className={styles.materials}>
            {materials.map((material, index) => (
              <Fragment key={index}>
                {index > 0 && (
                  <div className={styles.separator}>
                    <div />
                  </div>
                )}
                <Typography className={styles.text}>{material}</Typography>
              </Fragment>
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <Typography className={styles.label}>Дата</Typography>
          <Typography className={clsx(styles.text, styles.ellipsis)}>{date}</Typography>
        </div>
      </div>
      <div>
        <Amount amount={amount} />
      </div>
    </div>
  );
};
