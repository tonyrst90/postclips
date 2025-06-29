import { ReactNode } from "react";

export interface DashBoardCommonDropdown {
    days?: boolean;
}

export interface DashboardCommonHeaderType {
    title: string;
    tagClass?: string;
    dropDownFalse?: boolean;
    children?: ReactNode;
    cardClass?: string;
}

export interface CommonCardEarningProps {
    chart: any;
    amount: string;
    percentage: string;
    icon: string;
}

export interface NotificationsTabProp {
    navId: number;
    setNavId: (navId: number) => void;
}

export interface NotificationsTabContent {
    navId: number;
}

export interface OnlineTimelineGroupType {
    id: number;
    title: string;
}

export interface OnlineTimelineItemsType {
    id: number;
    group: number;
    title: string;
    start_time: any;
    end_time: any;
}

export interface CommonTotalRevenueCardType {
    icon: string,
    amount: string,
    title: string,
    arrowIcon: string,
    percentage: string,
    chart: any,
    divClass?: string,
    chartClass?: string
}

export interface CommonDailyVisitorsChartType {
    height: number
}

export interface RecentOrderBodyProps {
    filterText: string;
}

export interface TodayTaskTabType {
    tabId: number
}

export interface CommonTabContentTableType {
    value: number
}

export interface ProjectSummeryTableBodyType {
    projectName: string;
    projectType: string;
    teams: string[];
    startDate: string;
    location: string;
    status: string;
    dropdown: boolean;
}

interface ClientDetailsItems {
    color?: string;
    title: string;
    date: string;
}

export interface MobileAppDataType {
    svgIcon: string;
    title: string;
    email: string;
    color: string;
    clientDetails: ClientDetailsItems[];
    userDetail: string[];
    buttonName: string;
    btnColor?: string;
    class?: string;
}

export interface ClientBudgetPropsType {
    data: MobileAppDataType
}

export interface CommonDesignProps {
    color: string;
    title: string;
    completeValue: number;
    progressValue: number;
    userName: string;
    date: string;
    svgIcon: string;
}