import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import { useAppDispatch } from "@/Redux/Hooks";
import { MAX, MIN, STEP } from "@/Constant";
import { setPrizeRange } from "@/Redux/Reducers/ECommerce/ProductReducer";

const RangeSlider = () => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState([20, 50]);

  const priceHandle = (value: number[]) => {
    setValues(value);
    dispatch(setPrizeRange(value));
  };

  return (
    <Range
      values={values}
      step={STEP}
      min={MIN}
      max={MAX}
      onChange={(values) => priceHandle(values)}
      renderTrack={({ props, children }) => (
        <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px", display: "flex", width: "100%" }}>
          <output style={{ marginTop: "30px" }}>{values[0]}</output>
          <div ref={props.ref} style={{ alignSelf: "center", height: "5px", width: "100%", borderRadius: "4px", background: getTrackBackground({ values, colors: ["#ccc", '#003FDD', "#ccc"], min: MIN, max: MAX }) }}>
            {children}
          </div>
          <output style={{ marginTop: "30px" }}>{values[1]}</output>
        </div>
      )}
      renderThumb={({ props,index }) => <div {...props} key={index} style={{ ...props.style, height: "16px", width: "16px", borderRadius: "60px", backgroundColor: '#003FDD', display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 2px 6px #AAA" }}></div>}
    />
  );
};

export default RangeSlider;
