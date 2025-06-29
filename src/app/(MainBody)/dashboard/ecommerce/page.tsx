"use client";
import { FunctionComponent, useEffect, useState } from "react";

const EcommerceDashboard = () => {
    const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
    useEffect(() => {
        (async () => {
            if (typeof window !== "undefined") {
                const newClient = (await import("@/Components/General/Dashboard/EcommerceDashboard")).default;
                setClient(() => newClient);
            }
        })();
    }, []);
    return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default EcommerceDashboard;