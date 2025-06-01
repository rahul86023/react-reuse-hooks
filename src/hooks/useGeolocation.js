import { useState, useEffect } from "react";

export function useGeolocation() {
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (!navigator.geolocation) return;
    const watcher = navigator.geolocation.watchPosition(
      (pos) =>
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }),
      (err) => console.error(err)
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return position;
}
