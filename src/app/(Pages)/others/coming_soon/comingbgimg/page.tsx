"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const CommingSoonBgImage = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Others/ComingSoon/CommingSoonBgImage")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default CommingSoonBgImage;