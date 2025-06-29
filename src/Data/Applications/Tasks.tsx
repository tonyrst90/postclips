import { Business, DelayedTasks, Holidays, Newsletter, Notification, ThisMonthTasks, ThisWeekTasks, TodayTasks, UpcomingTasks } from "@/Constant";

export const viewTaskNav = [
    {
        id: 1,
        title: 'Created by me',
    },
    {
        id: 2,
        title: "Today's Tasks",
    },
    {
        id: 3,
        title: 'Delayed Tasks',
    },
    {
        id: 4,
        title: 'Upcoming Tasks',
    },
    {
        id: 5,
        title: 'This week tasks',
    },
    {
        id: 6,
        title: 'This month tasks',
    },
    {
        id: 7,
        title: 'Assigned to me',
    },
    {
        id: 8,
        title: 'My tasks',
    },
];

export const tagsTaskNav = [
    {
        id: 9,
        title: 'Notification',
    },
    {
        id: 10,
        title: "Newsletter",
    },
    {
        id: 11,
        title: 'Business',
    },
    {
        id: 12,
        title: 'Holidays',
    },
];

export const timeList = ["7:00 am", "7:30 am", "8:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm"];
export const taskRightViewsList = [
    { id: 2, title: TodayTasks }, { id: 3, title: DelayedTasks }, { id: 4, title: UpcomingTasks }, { id: 5, title: ThisWeekTasks }, { id: 6, title: ThisMonthTasks }
]
export const taskRightTagsList = [
    { id: 9, title: Notification }, { id: 10, title: Newsletter }, { id: 11, title: Business }, { id: 12, title: Holidays }
]