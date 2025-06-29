import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col, Form, FormGroup, Row } from "reactstrap";

const PrefixForm = () => {
  const STEP = 1;
  const MIN = 0;
  const MAX = 1000;
  const [values, setValues] = useState([200, 800]);
  return (
    <Form className="theme-form form-label-align-right range-slider">
      <FormGroup>
        <Row className="py-1">
          <Col md={10}>
            <Range values={values} step={STEP} min={MIN} max={MAX} onChange={(values) => { setValues(values); }} renderTrack={({ props, children }) => (
              <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px" }} className="d-flex w-100 mt-2 mb-3">
                <output className="mt-2 me-2">{values[0]}</output>
                <div ref={props.ref} className="w-100" style={{ height: "15px", borderRadius: "4px", background: getTrackBackground({ values, colors: ["#ccc", "#feb858", "#ccc"], min: MIN, max: MAX }), alignSelf: "center" }}>
                  {children}
                </div>
                <output className="mt-2 ms-2">{values[1]}</output>
              </div>
            )}
              renderThumb={({ props, index }) => (
                <div {...props} key={index} className="d-flex justify-content-center align-items-center" style={{ ...props.style, height: "25px", width: "7px", backgroundColor: "#feb858", boxShadow: "0px 2px 6px #AAA" }}>
                  <div style={{ height: "16px", width: "5px", backgroundColor: "#feb858" }} />
                </div>
              )}
            />
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default PrefixForm;