import { Activity, AlertTriangle, Award, Bell, DollarSign, GitHub, Headphones, Heart, Link2, Mail, Music, Settings } from "react-feather";

export const badgesContextualSubTitle = [
    {
        text: 'Use the',
        code: '.badge '
    },
    {
        text: 'utility class to make more badges.'
    }
];

export const pillsContextualSubTitle = [
    {
        text: 'Use the',
        code: '.rounded-pill'
    },
    {
        text: ' utility class to make badges more rounded with a larger ',
        code: 'border-radius'
    },
    {
        text: '.'
    }
];

export const numberPillsSubTitle = [
    {
        text: 'Use the',
        code: '.rounded-circle'
    },
    {
        text: ' utility class to make badges more rounded with a larger ',
        code: 'border-radius'
    },
    {
        text: '.'
    }
];

export const badgeWithIconSubTitle = [
    {
        text: 'Use the',
        code: '.badge '
    },
    {
        text: 'utility class to make more icons.'
    }
]

export const numberBadgeSubTitle = [
    {
        text: 'Use the',
        code: '.badge'
    },
    {
        text: ' utility class to make number of more badges.'
    }
];

export const roundedPillSubTitle = [
    {
        text: 'Use the',
        code: '.rounded-pill'
    },
    {
        text: ' utility class to make icons badges more rounded with a larger ',
        code: 'border-radius'
    },
    {
        text: '.'
    }
];

export const badgeHeadingSubTitle = [
    {
        text: 'All html headings,',
        code: ' <h1> '
    },
    {
        text: 'through',
        code: ' <h6> '
    },
    {
        text: ', are available in',
        code: ' .badge '
    },
    {
        text: 'tags.'
    }
];

export const badgeButtonSubTitle = [
    {
        text: '',
        code: '.badge'
    },
    {
        text: ' can be used as part of ',
        code: '.btn'
    },
    {
        text: ' to provide a icons.'
    }
]

export const badgesData = [
    {
        id: 1,
        class: 'primary',
        text: 'Primary'
    },
    {
        id: 2,
        class: 'secondary',
        text: 'Secondary'
    },
    {
        id: 3,
        class: 'success',
        text: 'Success'
    },
    {
        id: 4,
        class: 'info',
        text: 'Info'
    },
    {
        id: 5,
        class: 'warning text-dark',
        text: 'Warning'
    },
    {
        id: 6,
        class: 'danger',
        text: 'Danger'
    },
    {
        id: 7,
        class: 'light text-dark',
        text: 'Light'
    },
    {
        id: 8,
        class: 'dark',
        text: 'Dark'
    }
];

export const badgeIconData = [
    {
        id: 1,
        color: 'primary',
        iconName: <DollarSign />
    },
    {
        id: 2,
        color: 'secondary',
        iconName: <Headphones />
    },
    {
        id: 3,
        color: 'success',
        iconName: <Link2 />
    },
    {
        id: 4,
        color: 'info',
        iconName: <GitHub />
    },
    {
        id: 5,
        color: 'warning text-dark',
        iconName: <Award />
    },
    {
        id: 6,
        color: 'danger',
        iconName: <Activity />
    },
    {
        id: 7,
        color: 'light text-dark',
        iconName: <Heart />
    },
    {
        id: 8,
        color: 'dark',
        iconName: <Mail />
    }
];

export const badgeButtonData = [
    {
        class: 'primary',
        text: 'Messages',
        iconName: <Mail />
    },
    {
        class: 'secondary',
        text: 'notifications',
        iconName: <Bell />
    },
    {
        class: 'success',
        text: 'Update available',
        iconName: <Settings />
    },
    {
        class: 'info',
        text: 'Playing Now',
        iconName: <Music />
    },
    {
        class: 'warning text-dark',
        text: '1.2 GB Used',
        iconName: <AlertTriangle />
    }
];