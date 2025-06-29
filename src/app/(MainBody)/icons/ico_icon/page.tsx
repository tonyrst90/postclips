"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const IcoIcons = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof document !== "undefined") {
        const newClient = (await import("@/Components/Icons/IcoIcons/IcoIconContainer")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default IcoIcons;
