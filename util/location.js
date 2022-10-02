import { Keys } from "../constants/keys";

const MAPS_API_KEY = Keys.MAPS_API_KEY;

export function getMapPreview(latitute, longitude) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitute},${longitude},&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${latitute},${longitude}&key=${MAPS_API_KEY}`;

  return imagePreviewUrl;
}
