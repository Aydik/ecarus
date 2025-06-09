import { Dispatch, FC, SetStateAction } from 'react';
import styles from './index.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { StoreEntity } from 'app/models/generated';
import { calculateMapCenterAndZoom } from 'features/Map/utils/calculateMapCenterAndZoom.ts';
import { MapCenterUpdater } from 'features/Map/components/MapCenterUpdater';

import defaultIconUrl from '/public/assets/images/vector/pin_default.svg';
import activeIconUrl from '/public/assets/images/vector/pin_active.svg';
import { MapFlyToMarker } from 'features/Map/components/MapFlyToMarker';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  iconUrl:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  shadowUrl:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
});

const defaultIcon = new L.Icon({
  iconUrl: defaultIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const activeIcon = new L.Icon({
  iconUrl: activeIconUrl,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

interface Props {
  points?: StoreEntity[];
  currentPointId: number;
  setCurrentPointId?: Dispatch<SetStateAction<number>>;
}

export const Map: FC<Props> = ({ points = [], currentPointId, setCurrentPointId }) => {
  const { center, zoom } = calculateMapCenterAndZoom(points);
  return (
    <MapContainer center={center} zoom={zoom} className={styles.mapContainer}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      {points.map((point) => (
        <Marker key={point.id} position={[point.latitude, point.longitude]}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
      {points.map((point) => (
        <Marker
          key={point.id}
          position={[point.latitude, point.longitude]}
          icon={point.id === currentPointId ? activeIcon : defaultIcon}
          eventHandlers={{
            click: () => {
              if (setCurrentPointId)
                setCurrentPointId((prev) => {
                  return point.id === prev ? 0 : point.id;
                });
            },
          }}
        />
      ))}
      {currentPointId ? (
        <MapFlyToMarker
          position={[
            points.find((p) => p.id === currentPointId)?.latitude || 0,
            points.find((p) => p.id === currentPointId)?.longitude || 0,
          ]}
        />
      ) : (
        <MapCenterUpdater center={center} zoom={zoom} />
      )}
    </MapContainer>
  );
};
