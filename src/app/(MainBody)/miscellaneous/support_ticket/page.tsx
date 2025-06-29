"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

const SupportTicket = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Miscellaneous/SupportTicket/SupportTicketContainer")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default SupportTicket;