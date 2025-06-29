import { Placement, PopoverItems } from "@/Types/UiKits.type";

export const basicPopoverSubTitle = [
    {
        text: 'Use the',
        code: " data-bs-toggle='popover'"
    },
    {
        text: 'through popover above buttons. '
    }
];

export const popoverDirectionSubTitle = [
    {
        text: 'Use the',
        code: " data-bs-toggle='popover'"
    },
    {
        text: ' through popover directions above buttons. '
    }
];

export const popoverOffsetSubTitle = [
    {
        text: 'Use the',
        code: ' data-bs-offset="*,*"'
    },
    {
        text: ' through popover offset above buttons. '
    }
]

export const basicPopoverData: PopoverItems[] = [
    {
        id: '1',
        placement: Placement.Bottom,
        popoverHeader: 'Hover Popover',
        popoverBody: ' Several utility instruction sets have been featured in the Bootstrap 4 to promote very easy learning for beginners in the business of web building.',
        btnColor: 'success',
        btnText: 'Hover tooltip',
        trigger: 'hover'
    },
    {
        id: '2',
        placement: Placement.Right,
        popoverHeader: 'Dismissible popover',
        popoverBody: 'You are able to even develop and suggest improvements to the Bootstrap 4 before its final version is delivered.',
        btnColor: 'secondary',
        size: 'lg',
        btnText: 'Dismissible popover',
        trigger: 'focus'
    },
];

export const popoverPositions: PopoverItems[] = [
    {
        id: '3',
        placement: Placement.Right,
        popoverHeader: 'Popover On Right',
        popoverBody: 'Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself.',
        btnColor: 'danger',
        btnText: 'Popover on right',
        trigger: 'click',
    },
    {
        id: '4',
        placement: Placement.Bottom,
        popoverHeader: 'Popover On Bottom',
        popoverBody: 'Identify container:to evade rendering problems in more complex components (like Bootstrap input groups, button groups, etc).',
        btnColor: 'info',
        btnText: 'Popover on bottom',
        trigger: 'click',
    },
    {
        id: '5',
        placement: Placement.Left,
        popoverHeader: 'Popover On Left',
        popoverBody: 'Popovers are opt-in for effectiveness causes, in this way you have to initialize them yourself.',
        btnColor: 'dark',
        btnText: 'Popover on left',
        trigger: 'click',
    }
]