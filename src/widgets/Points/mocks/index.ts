import { StoreEntity } from 'app/models/generated';

export const mockPoints: StoreEntity[] = [
  {
    id: 1,
    name: 'nike',
    address: 'г. Москва, проспект Мира, 102',
    latitude: 55.8145,
    longitude: 37.6386,
    phone: '+7 (999) 123-45-67',
    city: {
      id: 1,
      name: 'Москва',
      products: {},
      stores: {},
    },
  },
  {
    id: 2,
    name: 'adidas',
    address: 'г. Москва, Ленинградский проспект, 62',
    latitude: 55.8072,
    longitude: 37.5143,
    phone: '+7 (999) 123-45-67',
    city: {
      id: 1,
      name: 'Москва',
      products: {},
      stores: {},
    },
  },
  {
    id: 3,
    name: 'puma',
    address: 'г. Москва, Каширское шоссе, 26',
    latitude: 55.6563,
    longitude: 37.6682,
    phone: '+7 (999) 123-45-67',
    city: {
      id: 1,
      name: 'Москва',
      products: {},
      stores: {},
    },
  },
  {
    id: 4,
    name: 'rebook',
    address: 'г. Москва, Варшавское шоссе, 95',
    latitude: 55.6207,
    longitude: 37.6015,
    phone: '+7 (999) 123-45-67',
    city: {
      id: 1,
      name: 'Москва',
      products: {},
      stores: {},
    },
  },
];
