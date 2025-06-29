"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const FeatherIcon = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof document !== "undefined") {
        const newClient = (await import("@/Components/Icons/FeatherIcon/FeatherIconContainer")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default FeatherIcon;
