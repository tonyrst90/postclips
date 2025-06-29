"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const ThemifyIcon = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof document !== "undefined") {
        const newClient = (await import("@/Components/Icons/ThemifyIcon/ThemifyIconContainer")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default ThemifyIcon;
