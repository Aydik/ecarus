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
import { updateUser } from 'entities/User/slice';
import { ProductQrModal } from 'entities/Product/components/ProductQrModal';

export { ProductCardSkeleton };

interface Props {
  product: ProductsEntity;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();

  const city = useSelector((state: RootState) => state.city.current);
  const [isQrOpened, setIsQrOpened] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleClick = () => {
    if (city) {
      buyProduct({ productId: product.id, cityId: city.id, count: 1 })
        .then(() => {
          dispatch(updateUser());
          setSuccess(true);

          setIsQrOpened(true);
        })
        .catch((error) => {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 401) {
            dispatch(setIsOpened(true));
          } else {
            // поменять на false, но там проблемы с покупкой
            setSuccess(true);

            setIsQrOpened(true);
          }
        });
    }
  };

  return (
    <>
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
      <ProductQrModal
        isOpened={isQrOpened}
        onClose={() => setIsQrOpened(false)}
        isSuccess={success}
      />
    </>
  );
};
