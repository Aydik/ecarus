import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface Props {
  center: [number, number];
}

export const MapCenterUpdater: FC<Props> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [center, map]);

  return null;
};
