import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default Leaflet icon issue in React
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png", // Red marker
  iconSize: [30, 50], 
  iconAnchor: [15, 50], 
  popupAnchor: [0, -40],
  shadowUrl: markerShadow, 
  shadowSize: [40, 40],
});

// Location coordinates (Replace with your actual coordinates)
const position = [28.49782400901782, 77.08632785466537]; // San Francisco Example

export default function LocationMap() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex justify-center my-12">
      <div className="w-[1180px] h-[300px] rounded-lg shadow-lg overflow-hidden border border-gray-300">
        {isMounted && (
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-full z-0"
            style={{ height: "300px", width: "1180px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={redIcon}>
              <Popup>📍 Our Office Location</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
}
