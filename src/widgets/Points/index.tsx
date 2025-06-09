import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Map } from 'features/Map';
import { useSelector } from 'react-redux';
import type { RootState } from 'app/store';
import { getPoints } from 'widgets/Points/services/points.service.ts';
import { PointsFilters } from 'features/PointsFilters';
import { StoreEntity } from 'app/models/generated';
import { mockPoints } from 'widgets/Points/mocks';
import { PointsWithSearch } from 'features/PointsWithSearch';

export const Points: FC = () => {
  const city = useSelector((state: RootState) => state.city.current);

  const [points, setPoints] = useState<StoreEntity[]>([]);
  const [currentPoint, setCurrentPoint] = useState<StoreEntity | null>(null);

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
      <div className={styles.caption}>
        <PointsWithSearch key={JSON.stringify(points)} points={points} />
        <PointsFilters />
      </div>
    </div>
  );
};
