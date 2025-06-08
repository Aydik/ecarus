import { FC, useState } from 'react';
import { ProductCardSkeleton } from './components/ProductCardSkeleton';
import styles from './index.module.scss';
import { Amount } from 'src/shared/ui/Amount';
import { Typography } from 'shared/ui/Typography';
import { ProductsEntity } from 'app/models/generated';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'app/store';
import { buyProduct } from 'features/Products/services/products.service.ts';
import { AxiosError } from 'axios';
import { setIsOpened } from 'features/Authentication/slice';

export { ProductCardSkeleton };

interface Props {
  product: ProductsEntity;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();

  const city = useSelector((state: RootState) => state.city.current);
  const [isQrOpened, setIsQrOpened] = useState<boolean>(false);

  const handleClick = () => {
    if (city) {
      buyProduct(product.id, city.id)
        .then(() => {
          location.reload();
          setIsQrOpened(true);
        })
        .catch((error) => {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 401) {
            dispatch(setIsOpened(true));
          } else {
            console.error('Ошибка покупки:', error);
          }
        });
    }
    console.log(isQrOpened);
  };

  return (
    <button className={styles.productCard} onClick={handleClick}>
      <div
        className={styles.productImage}
        style={{
          backgroundImage: product.image ? `url(${product.image})` : 'none',
        }}
      >
        <div className={styles.brand}>{product.brand}</div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.textContainer}>
          <Typography variant={'p'} className={styles.name}>
            {product.name}
          </Typography>
          <Typography variant={'p'} className={styles.description}>
            {product.description}
          </Typography>
        </div>
        <Amount amount={product.price} />
      </div>
    </button>
  );
};
