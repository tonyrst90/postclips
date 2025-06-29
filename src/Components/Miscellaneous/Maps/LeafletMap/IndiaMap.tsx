import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletIndiaMap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { indianMapData, indianMapPosition } from "@/Data/Miscellaneous/Maps/Maps";

const IndiaMap = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonCardHeader title={LeafletIndiaMap} span={indianMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={5} center={indianMapPosition} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IndiaMap;