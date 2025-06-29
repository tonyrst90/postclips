"use client";
import { FunctionComponent, useEffect, useState } from "react";

const ProjectDashboard = () => {
    const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
    useEffect(() => {
        (async () => {
            if (typeof window !== "undefined") {
                const newClient = (await import("@/Components/General/Dashboard/ProjectDashboard")).default;
                setClient(() => newClient);
            }
        })();
    }, []);
    return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default ProjectDashboard;