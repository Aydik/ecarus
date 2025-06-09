import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface MapFlyToMarkerProps {
  position: [number, number];
  zoom?: number;
}

export const MapFlyToMarker: FC<MapFlyToMarkerProps> = ({ position, zoom = 15 }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom, {
        duration: 1.5,
      });
    }
  }, [position, zoom, map]);

  return null;
};
