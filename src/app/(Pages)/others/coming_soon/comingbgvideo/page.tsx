"use client";
import { FunctionComponent, useEffect, useState } from "react";

const ComingSoonBgVideo = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Others/ComingSoon/ComingSoonBgVideo")).default;
        setClient(() => newClient);
      }
    })();
  }, []);

  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default ComingSoonBgVideo;