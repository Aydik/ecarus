import { FC } from 'react';
import styles from './index.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { MapCenterUpdater } from 'features/Map/components/MapCenterUpdater.ts';
import { StoreEntity } from 'app/models/generated';
import { calculateMapCenterAndZoom } from 'features/Map/utils/calculateMapCenterAndZoom.ts';

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
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      <Marker position={[55.751244, 37.618423]}>
        <Popup>Москва</Popup>
      </Marker>
      <MapCenterUpdater center={center} />
    </MapContainer>
  );
};
