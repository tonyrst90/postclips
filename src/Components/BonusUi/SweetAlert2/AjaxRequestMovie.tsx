/* eslint-disable no-throw-literal */
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AjaxRequestMovies, MovieMode } from "@/Constant";
import { ajaxData } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const AjaxRequestMovie = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: 'Search for a movie. e.g. "Harry Potter".', input: "text", confirmButtonColor: "#003FDD", })
      .then((name) => {
        if (name) return fetch(`https://itunes.apple.com/search?term=${name.value}&entity=movie`);
        throw null;
      })
      .then((results) => { return results.json(); })
      .then((json) => {
        const movie = json.results[0];
        if (!movie) return SweetAlert.fire({ text: "No movie was found!", confirmButtonColor: "#003FDD" });
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
        SweetAlert.fire({ title: "Top result:", imageUrl: imageURL, text: name, });
      })
      .catch((err) => { if (err) SweetAlert.fire("Oh noes!", "The AJAX request failed!", "error"); });
  };

  return (
    <Col xxl={3} lg={4} sm={6} xs={12}>
      <Card className="height-equal">
        <CommonCardHeader title={AjaxRequestMovies} span={ajaxData} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-15" onClick={displayAlert}>{MovieMode}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AjaxRequestMovie;