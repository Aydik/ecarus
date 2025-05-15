import { FC } from 'react';
import { ProductCard } from 'entities/Product';

const product = {
  id: 1,
  name: 'Vodka Stolichnaya',
  description: 'Для всех',
  brand: 'K&B',
  price: 55,
  image: 'vodka.png',
};

export const MarketPage: FC = () => {
  return (
    <>
      <ProductCard product={product} />
    </>
  );
};
