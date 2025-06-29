import React, { useState } from "react";
import { Col, Form, FormGroup, Row } from "reactstrap";
import { Range, getTrackBackground } from "react-range";

const MinMaxValueForm = () => {
  const [values, setValues] = useState([550]);
  return (
    <Form className="theme-form form-label-align-right range-slider">
      <FormGroup>
        <Row className="py-1">
          <Col md={10}>
            <div style={{ color: "#FF6150" }} className="d-flex justify-content-center flex-wrap m-3">
              <Range values={values} step={1} min={100} max={1000} onChange={(values) => setValues(values)} renderTrack={({ props, children }) => (
                <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px" }} className="d-flex w-100">
                  <output className="mt-2 me-2">100</output>
                  <div ref={props.ref} className="w-100 rounded-2" style={{ height: "5px", background: getTrackBackground({ values: values, colors: ["#FF6150", "#ccc"], min: 100, max: 1000 }), alignSelf: "center" }}>
                    {children}
                  </div>
                  <output className="mt-2 ms-2">1000</output>
                </div>
              )}
                renderThumb={({ props, index }) => (
                  <div {...props} key={index} className="d-flex justify-content-center align-items-center rounded-5" style={{ ...props.style, height: "25px", width: "25px", border: "3px solid #FF6150", backgroundColor: "#FFF", boxShadow: "0px 2px 6px #AAA" }}>
                    <div style={{ height: "20px", width: "20px", backgroundColor: "#FFF" }} className="rounded-5" />
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

export default MinMaxValueForm;