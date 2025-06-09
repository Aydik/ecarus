import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface Props {
  center: [number, number];
  zoom?: number;
}

export const MapCenterUpdater = ({ center, zoom }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    map.flyTo(center, zoom ?? map.getZoom(), {
      animate: true,
      duration: 1.5,
    });
  }, [center, zoom, map]);

  return null;
};
