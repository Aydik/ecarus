import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Map } from 'features/Map';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';
import { getPoints } from 'widgets/Points/services/points.service.ts';
import { PointsFilters } from 'features/PointsFilters';
import { StoreEntity } from 'app/models/generated';
import { mockPoints } from 'widgets/Points/mocks';
import { FilterFlags } from 'shared/types';

const materials = ['Пластик', 'Обувь', 'Старая одежда', 'Стекло', 'Бумага', 'Металл', 'Батарейки'];

const brands = ['Adidas', 'Puma', 'Reebok', 'Nike', 'Converse', 'Lacoste'];

export const Points: FC = () => {
  const city = useSelector((state: RootState) => state.city.current);

  const [points, setPoints] = useState<StoreEntity[]>([]);
  const [currentPoint, setCurrentPoint] = useState<StoreEntity | null>(null);

  const [materialFlags, setMaterialFlags] = useState<FilterFlags>({});
  const [brandsFlags, setBrandsFlags] = useState<FilterFlags>({});

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const material of materials) {
      flags[material] = false;
    }
    setMaterialFlags(flags);
  }, []);

  useEffect(() => {
    const flags: FilterFlags = {};
    for (const brand of brands) {
      flags[brand] = false;
    }
    setBrandsFlags(flags);
  }, []);

  useEffect(() => {
    if (city) {
      getPoints(city.id).then((res) => {
        console.log(res);
        setPoints(mockPoints);
      });
    }
  }, [city]);

  return (
    <div className={styles.pointsContainer}>
      <Map key={points.join(',')} points={points} />
      <PointsFilters
        filters={{
          brandsFlags: brandsFlags,
          setBrandsFlags: setBrandsFlags,
          materialFlags: materialFlags,
          setMaterialFlags: setMaterialFlags,
        }}
      />
    </div>
  );
};
