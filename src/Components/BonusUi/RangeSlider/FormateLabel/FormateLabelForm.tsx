import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Col, Form, FormGroup, Row } from "reactstrap";

const FormateLabelForm = () => {
  const [values, setValues] = useState([10.0]);
  return (
    <Form className="theme-form form-label-align-right range-slider">
      <FormGroup>
        <Row className="py-1">
          <Col md={10}>
            <div className="d-flex justify-content-center flex-wrap m-3" style={{ color: "#4AAD8A" }}>
              <Range values={values} step={1.0} min={0.0} max={20.0} onChange={(values) => setValues(values)} renderTrack={({ props, children }) => (
                <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px" }} className="d-flex w-100">
                  <output className="mt-2 me-2">0.00</output>
                  <div ref={props.ref} className="w-100" style={{ height: "5px", borderRadius: "4px", background: getTrackBackground({ values: values, colors: ["#4AAD8A", "#ccc"], min: 0, max: 20 }), alignSelf: "center" }}>
                    {children}
                  </div>
                  <output className="mt-2 ms-2">20.00</output>
                </div>
              )}
                renderThumb={({ props, index }) => (
                  <div {...props} key={index} className="d-flex justify-content-center align-items-center rounded-5" style={{ ...props.style, height: "20px", width: "20px", backgroundColor: "#4AAD8A", boxShadow: "0px 2px 6px #AAA" }}>
                    <div style={{ height: "16px", width: "5px", backgroundColor: "#4AAD8A" }} />
                  </div>
                )}
              />
              <output style={{ marginTop: "12px" }} id="output">
                {values[0]}.00
              </output>
            </div>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
};

export default FormateLabelForm;