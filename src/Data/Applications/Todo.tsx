import { Activity, Cast, CheckCircle } from "react-feather";

export const todoNavList = [
    { color: "success", icon: <CheckCircle />, tittle: 'Completed', badge: 3, badgeText: 'Done' },
    { color: "danger", icon: <Cast />, tittle: 'Pending', badge: 2, badgeText: 'Pending' },
    { color: "info", icon: <Activity />, tittle: 'In Process', badge: 2, badgeText: 'In Progress' },
];
