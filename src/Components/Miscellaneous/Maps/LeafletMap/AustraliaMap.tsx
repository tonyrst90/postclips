import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletAustraliaMap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { austaliaMapData, austaliaMapPosition } from "@/Data/Miscellaneous/Maps/Maps";

const AustraliaMap = () => {
  return (
    <Col sm={6}>
      <Card>
        <CommonCardHeader title={LeafletAustraliaMap} span={austaliaMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={4} center={austaliaMapPosition} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={false} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AustraliaMap;