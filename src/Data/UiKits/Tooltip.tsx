export const basicTooltipData = [
    {
        text: " Use the ",
        code: "data-bs-title",
    },
    {
        text: " to change tooltip title and ",
        code: "data-bs-toggle",
    },
    {
        text: " to add tooltip attribute.",
    },
];

export const colorTooltipData = [
    {
        text: " Use the ",
        code: "btn- *",
    },
    {
        text: "to change dark background color and ",
        code: "data-bs-placement='*' ",
    },
    {
        text: "to tooltip positions change.",
    },
];

export const colorTooltipList = [
    {
        id: 4,
        btnColor: "secondary",
        tooltip: "Secondary",
        btnText: "Secondary",
        placement: "top",
    },
    {
        id: 5,
        btnColor: "success",
        tooltip: "Success",
        btnText: "Success",
        placement: "top",
    },
    {
        id: 6,
        btnColor: "warning",
        tooltip: "Warning",
        btnText: "Warning",
        placement: "top",
    },
    {
        id: 7,
        btnColor: "danger",
        tooltip: "Danger",
        btnText: "Danger",
        placement: "top",
    },
];

export const directionTooltipData = [
    {
        text: " Use the ",
        code: "btn-*",
    },
    {
        text: " to change dark background color and",
        code: " data-bs-placement='*'",
    },
    {
        text: "[top/right/bottom/left] to tooltip direction change.",
    },
];

export const directionTooltipList = [
    {
        id: 9,
        placement: "right",
        tooltip: "Tooltip on right",
        btnText: "Tooltip on right",
        btnColor: "secondary",
    },
    {
        id: 10,
        placement: "bottom",
        tooltip: "Tooltip on bottom",
        btnText: "Tooltip on bottom",
        btnColor: "success",
    },
    {
        id: 11,
        placement: "left",
        tooltip: "Tooltip on left",
        btnText: "Tooltip on left",
        btnColor: "warning",
    },
];

export const hoverTooltipData = [
    {
        text: " Use the ",
        code: "bg-*-light",
    },
    {
        text: " to change light background color and ",
        code: "data-bs-title '",
    },
    {
        text: " to the content under the HTML tag.",
    },
];

export const hoverTooltipList = [
    {
        id: 13,
        tooltip: <div dangerouslySetInnerHTML={{ __html: `<b>Thank</b> <em>you</em>` }}></div>,
        btnText: "Last Warning",
        className: "bg-warning",
        placement: "top",
        btnColor: "warning",
    },
    {
        id: 14,
        tooltip: <div dangerouslySetInnerHTML={{ __html: `<i>Thank </i> <u>you</u>` }}></div>,
        btnText: "It's Danger",
        className: "bg-danger",
        placement: "top",
        btnColor: "danger",
    },
    {
        id: 15,
        tooltip: <div dangerouslySetInnerHTML={{ __html: `<b>Thank</b> <em>you</em>` }}></div>,
        btnText: "Coming Soon",
        className: "bg-info",
        placement: "top",
        btnColor: "info",
    },
];

export const fillTooltipData = [
    {
        text: "Tooltip in hover effect through fill dark color.",
        code: "[.btn-outline-*]",
    },
    {
        text: " and ",
        code: "data-bs-title ",
    },
    {
        text: "to the content under the HTML Tag.",
    },
];

export const fillTooltipList = [
    {
        id: 17,
        tooltip: "Tooltip Secondary",
        btnText: "Tooltip Secondary",
        btnColor: "secondary",
        placement: "top",
    },
    {
        id: 18,
        tooltip: "Tooltip Success",
        btnText: "Tooltip Success",
        btnColor: "success",
        placement: "top",
    },
    {
        id: 19,
        tooltip: "Tooltip Info",
        btnText: "Tooltip Info",
        btnColor: "info",
        placement: "top",
    },
];