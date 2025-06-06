import { FC, useState } from 'react';
import styles from './index.module.scss';
import { TabItem } from 'widgets/Tabs/types';
import { Tab } from 'widgets/Tabs/components/Tab';
import { PromoCodes } from 'features/PromoCodes';

const items: TabItem[] = [
  {
    name: 'Промокоды',
    content: <PromoCodes />,
  },
  {
    name: 'История',
    content: <div>История</div>,
  },
];

export const Tabs: FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className={styles.tabs}>
        {items.map(({ name }, idx) => (
          <Tab key={idx} name={name} isSelected={idx === active} onClick={() => setActive(idx)} />
        ))}
      </div>
      <div className={styles.panel}>{items[active].content}</div>
    </div>
  );
};
