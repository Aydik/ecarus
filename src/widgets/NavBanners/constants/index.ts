import { NavBanner } from '../types';

export const NAV_BANNERS: NavBanner[] = [
  {
    backgroundImage: 'points.png',
    backgroundSize: '60% auto',
    backgroundPosition: 'bottom 9px right',
    title: 'Пункты сбора',
    description: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
    link: '/points',
  },
  {
    backgroundImage: 'ecomarket.png',
    backgroundSize: '50% auto',
    title: 'ЭкоМаркет',
    description: 'Используй заработанные экокоины для покупки товаров из переработанных материалов',
    link: '/market',
  },
];
