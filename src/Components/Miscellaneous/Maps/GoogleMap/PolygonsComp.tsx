import { Col, Card, CardBody } from "reactstrap";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { PolygonsTitle } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { polygonCenter, polygonContainerStyle } from "@/Data/Miscellaneous/Maps/Maps";

const PolygonsComp = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
  });

  return (
    <Col lg={6} md={12}>
      <Card>
        <CommonCardHeader title={PolygonsTitle} headClass="pb-0" />
        <CardBody>
          <div className="map-js-height overflow-hidden">
            <div id="gmap-simple" className="map-block">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={polygonContainerStyle}
                  center={polygonCenter}
                  zoom={10}
                ></GoogleMap>
              ) : (
                "loading"
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default PolygonsComp;