"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const FontAwsome = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof document !== "undefined") {
        const newClient = (await import("@/Components/Icons/FontAwsome/FontAwsomeContainer")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default FontAwsome;
