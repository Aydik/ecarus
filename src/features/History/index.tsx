import { FC } from 'react';
import styles from './index.module.scss';
import { Provision as ProvisionType } from 'entities/Provision/types';
import { Provision } from 'entities/Provision';

const provisions: ProvisionType[] = [
  {
    amount: 1000,
    date: '25.09.2021',
    materials: ['Пластик: 1 кг', 'Стекло: 2 кг', 'Бумага: 25 кг'],
    address: 'Казань, Кремлёвская, 88',
  },
  {
    amount: 90,
    date: '25.09.2021',
    materials: ['Пластик: 8 кг', 'Стекло: 2 кг', 'Бумага: 5 кг'],
    address: 'Казань, проспект Победы, 141',
  },
  {
    amount: 7777,
    date: '25.09.2021',
    materials: [
      'Золото: 1 кг',
      'Серебро: 2 кг',
      'Платина: 25 кг',
      'Алмазы 40 шт',
      'Пластик: 1 бутылка',
    ],
    address: 'Казань, Аделя Кутуя, 2к2',
  },
];

export const History: FC = () => {
  return (
    <ul className={styles.promoCodes}>
      {provisions.map((provision, index) => (
        <li key={index}>
          <Provision key={index} provision={provision} />
        </li>
      ))}
    </ul>
  );
};
