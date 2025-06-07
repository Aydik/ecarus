import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Icon } from 'shared/ui/Icon/Icon.tsx';
import { Typography } from 'shared/ui/Typography';
import { CitiesEntity } from 'app/models/generated';
import { getCities } from 'entities/City/services/city.service.ts';
import { useBreakpoint } from 'shared/context/BreakpointContext.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from 'app/store';
import { setCity } from 'entities/City/slice';

export const City: FC = () => {
  const isDesktop = useBreakpoint() === 'desktop';
  const [open, setOpen] = useState(false);
  const [cities, setCities] = useState<CitiesEntity[]>([]);

  const city = useSelector((state: RootState) => state.city.city?.name);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getCities()
      .then((data: CitiesEntity[]) => {
        setCities(data);
        if (!city) dispatch(setCity(data[0]));
      })
      .catch(() => console.error('Ошибка загрузки городов'));
  }, []);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <button className={styles.city_current} onClick={toggleDropdown}>
        <Icon name={'pin'} />
        <Typography className={styles.name}>{city}</Typography>
      </button>
      {open && (
        <div
          className={styles.dropdown}
          style={
            isDesktop
              ? {
                  top: '100%',
                  marginTop: '32px',
                }
              : {
                  bottom: '100%',
                  marginBottom: '16px',
                }
          }
        >
          {cities.map((city) => (
            <button
              key={city.id}
              className={styles.city}
              onClick={() => {
                dispatch(setCity(city));
                toggleDropdown();
              }}
            >
              {city.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
