import { FC } from 'react';
import styles from './index.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { StoreEntity } from 'app/models/generated';
import { calculateMapCenterAndZoom } from 'features/Map/utils/calculateMapCenterAndZoom.ts';
import { MapCenterUpdater } from 'features/Map/components/MapCenterUpdater';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Props {
  points?: StoreEntity[];
}

export const Map: FC<Props> = ({ points = [] }) => {
  const { center, zoom } = calculateMapCenterAndZoom(points);
  return (
    <MapContainer center={center} zoom={zoom} className={styles.mapContainer}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      {points.map((point) => (
        <Marker key={point.id} position={[point.latitude, point.longitude]}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
      <MapCenterUpdater center={center} />
    </MapContainer>
  );
};
