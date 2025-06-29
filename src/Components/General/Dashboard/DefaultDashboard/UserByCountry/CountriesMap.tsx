import { worldMapProps } from "@/Data/General/Dashboard/DefaultDashboard";
import { MapContainer, TileLayer } from "react-leaflet";

const CountriesMap = () => {

  return (
    <MapContainer style={{ height: "300px", width: "100%" }} className="jvector-map-height"  {...worldMapProps}>
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default CountriesMap;