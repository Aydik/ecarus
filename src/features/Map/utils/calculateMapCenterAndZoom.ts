import { StoreEntity } from 'app/models/generated';

export function calculateMapCenterAndZoom(points: StoreEntity[]): {
  center: [number, number];
  zoom: number;
} {
  if (points.length === 0) {
    return {
      center: [55.751244, 37.618423],
      zoom: 12,
    };
  }

  const latitudes = points.map((p) => p.latitude);
  const longitudes = points.map((p) => p.longitude);

  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  const center: [number, number] = [(minLat + maxLat) / 2, (minLng + maxLng) / 2];

  const latDiff = maxLat - minLat;
  const lngDiff = maxLng - minLng;
  const maxDiff = Math.max(latDiff, lngDiff);

  let zoom;
  if (maxDiff < 0.01) zoom = 15;
  else if (maxDiff < 0.03) zoom = 14;
  else if (maxDiff < 0.05) zoom = 13;
  else if (maxDiff < 0.1) zoom = 12;
  else if (maxDiff < 0.2) zoom = 11;
  else zoom = 10;

  return { center, zoom: zoom - 1 };
}
