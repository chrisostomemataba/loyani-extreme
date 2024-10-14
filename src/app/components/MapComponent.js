import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "../../styles/mapComponent.module.css";

const MapComponent = () => {
  const position = [-3.3672, 36.6811]; // Arusha coordinates

  const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className={styles.mapWrapper}>
      <MapContainer center={position} zoom={13} className={styles.mapContainer}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Loyani Safaris <br /> Arusha, Tanzania
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
