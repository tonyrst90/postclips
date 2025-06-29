"use client"
import React, { FunctionComponent, useEffect, useState } from "react";

const LeafletMap = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Miscellaneous/Maps/LeafletMap/LeafletMapContainer")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default LeafletMap;