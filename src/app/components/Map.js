import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[-3.3681, 36.6961]}
      zoom={10}
      style={{
        height: "350px",
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-3.3681, 36.6961]}>
        <Popup>Loyani Safaris, Arusha, Kilimanjaro.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
