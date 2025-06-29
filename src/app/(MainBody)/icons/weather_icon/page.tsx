"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const WeatherIcon = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof document !== "undefined") {
        const newClient = (await import("@/Components/Icons/WeatherIcon")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default WeatherIcon;
