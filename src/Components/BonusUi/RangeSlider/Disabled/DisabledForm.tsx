import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col, Form, FormGroup, Row } from "reactstrap";

const DisabledForm = () => {
  const [values, setValues] = useState([10]);
  return (
    <Form className="theme-form form-label-align-right range-slider">
      <FormGroup>
        <Row className="py-1">
          <Col md={10}>
            <div className="d-flex justify-content-center flex-wrap m-3">
              <Range values={values} step={1} min={0} max={20} onChange={(values) => setValues(values)} disabled={true} renderTrack={({ props, children }) => (
                <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px" }} className="d-flex w-100">
                  <output className="mt-2 me-2">0</output>
                  <div ref={props.ref} className="w-100" style={{ height: "5px", borderRadius: "4px", background: getTrackBackground({ values: values, colors: ["#ccc", "#ccc"], min: 0, max: 20 }), alignSelf: "center" }}>
                    {children}
                  </div>
                  <output className="mt-2 ms-2">20</output>
                </div>
              )}
                renderThumb={({ props, isDragged, index }) => (
                  <div {...props} key={index} className="d-flex justify-content-center align-items-center rounded-5" style={{ ...props.style, height: "35px", width: "35px", backgroundColor: "#FFF", boxShadow: "0px 2px 6px #AAA" }}>
                    <div style={{ height: "16px", width: "5px", backgroundColor: isDragged ? "#ccc" : "#CCC" }} />
                  </div>
                )}
              />
              <output className="mt-3" id="output">{values[0]}</output>
            </div>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default DisabledForm;