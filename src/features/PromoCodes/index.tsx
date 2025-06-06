import { FC } from 'react';
import styles from './index.module.scss';
import { PromoCodeType, PromoCode } from 'entities/PromoCode';

const promoCodes: PromoCodeType[] = [
  {
    amount: 1000,
    date: '25.09.2021',
    link: 'https://www.figma.com/design/HFIujA5ZFu2MD2pNdyACEg/%D0%ADcarus?node-id=29-8036&t=AjVmgv4VszGn16Ck-01',
    isActive: true,
  },
  {
    amount: 100,
    date: '25.09.2021',
    link: 'https://www.figma.com/design/HFIujA5ZFu2MD2pNdyACEg/%D0%ADcarus?node-id=29-8036&t=AjVmgv4VszGn16Ck-0',
  },
  {
    amount: 400,
    date: '25.09.2021',
    link: 'https://www.figma.com/design/HFIujA5ZFu2MD2pNdyACEg/%D0%ADcarus?node-id=29-8036&t=AjVmgv4VszGn16Ck-0',
  },
];

export const PromoCodes: FC = () => {
  return (
    <ul className={styles.promoCodes}>
      {promoCodes.map((promoCode, index) => (
        <>
          {index !== 0 && <div className={styles.divider} />}
          <li key={index}>
            <PromoCode key={index} promoCode={promoCode} />
          </li>
        </>
      ))}
    </ul>
  );
};
