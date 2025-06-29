import { InboxEmailType, LetterBoxSidebarType } from "@/Types/Email.type";

export const emailSidbar = [
    {
        className: 'folder',
        title: 'All mail',
    },
    {
        className: 'new-window',
        title: 'Sent',
        badge: (69),
    },
    {
        className: 'pencil-alt',
        title: 'DRAFT',
        badge: (59),
    },
    {
        className: 'trash',
        title: 'Trash',
        badge: (99),
    },
    {
        className: 'info-alt',
        title: 'IMPORTANT',
    },
    {
        className: 'star',
        title: 'Starred',
    },
    {
        line: <hr />
    },
    {
        className: 'email',
        title: 'UNREAD',
    },
    {
        className: 'export',
        title: 'Spam',
    },
    {
        className: 'share',
        title: 'OUTBOX',
    },
    {
        className: 'file',
        title: 'UPDATE',
    },
    {
        className: 'bell',
        title: 'ALERT',
    },
    {
        className: 'notepad',
        title: 'NOTES',
        badge: '20',
    },
];

export const emailList = [
    { tittle: 'Pork Lorn ', date: 15, month: "July", year: 2024, paragraph: "Mattis luctus. Donec nisi diam" },
    { tittle: 'Kori Thomas ', date: 20, month: "january", year: 2024, paragraph: "Mattis luctus. Donec nisi diam" },
    { tittle: 'Hileri Makr ', date: 20, month: "August", year: 2024, paragraph: "Mattis luctus. Donec nisi diam" },
    { tittle: "Lion Lorpa ", date: 2, month: "Jun", year: 2024, paragraph: "Mattis luctus. Donec nisi diam" },
    { tittle: "Solvn Relto ", date: 25, month: "july", year: 2024, paragraph: "Mattis luctus. Donec nisi diam" },
    { tittle: "Repro Soft ", date: 15, month: "july", year: 2024, paragraph: "Mattis luctus. Donec nisi diam" },
    { tittle: "Lion Lorpa ", date: 2, month: "jun", year: 2024, paragraph: "Mattis luctus. Donec nisi diam" },
]

export const attachmentImage = ['1.jpg', '2.jpg', '3.jpg'];
export const actionWrapperList = [
    { id: 1, icon: 'reply', text: 'Reply' },
    { id: 2, icon: 'reply-all', text: 'Reply All' },
    { id: 3, icon: 'share', text: 'Forward' },
]

//letter-box

export const letterBoxSidebar: LetterBoxSidebarType[] = [
    {
        title: "Inbox",
        icon: "inbox",
        id: "1",
        badge: true,
    },
    {
        title: "Sent",
        icon: "sent",
        id: "2",
    },
    {
        title: "Starred",
        icon: "star",
        id: "3",
        badge: true,
    },
    {
        title: "Draft",
        icon: "draft",
        id: "4",
    },
    {
        title: "Trash",
        icon: "trash",
        id: "5",
    },
    {
        title: "Work",
        icon: "pintag",
        id: "6",
        color: "primary",
    },
    {
        title: "Private",
        icon: "pintag",
        id: "7",
        color: "warning",
    },
    {
        title: "Support",
        icon: "pintag",
        id: "8",
        color: "success",
    },
];

export const emailNavTab = [
    {
        title: "Important",
        icon: "mail",
        id: "pills-important-tab",
    },
    {
        title: "Social",
        icon: "goal",
        id: "pills-social-tab",
    },
    {
        title: "Promotion",
        icon: "tread",
        id: "pills-promotion-tab",
    },
];

export const supportEmailData: InboxEmailType[] = [
    {
        id: 1,
        shortName: "EH",
        name: "Esther Howard",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
            {
                title: "Task",
                color: "success",
            },
        ],
        time: "1:00 PM",
    },
    {
        id: 2,
        shortName: "CW",
        name: "Cameron Williamson",
        color: "success",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
    },
];

export const privateEmailData: InboxEmailType[] = [
    {
        id: 1,
        shortName: "AD",
        name: "Asther Dolly",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
            {
                title: "Task",
                color: "success",
            },
        ],
        time: "1:00 PM",
    },
];

export const workEmailData: InboxEmailType[] = [
    {
        id: 1,
        shortName: "EH",
        name: "Esther Howard",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
            {
                title: "Task",
                color: "success",
            },
        ],
        time: "1:00 PM",
    },
    {
        id: 2,
        image: "3.png",
        name: "Brooklyn Simmons",
        color: "success",
        message: "Confirm your booking id -",
        subMessage:
            "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        badge: [
            {
                title: "deadline",
                color: "primary",
            },
        ],
        time: "7:50 AM",
    },
    {
        id: 3,
        shortName: "EV",
        name: "Esther Voward",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
            {
                title: "Task",
                color: "success",
            },
        ],
        time: "1:00 PM",
    },
];

export const trashEmailData: InboxEmailType[] = [
    {
        id: 1,
        shortName: "EH",
        name: "Esther Howard",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "offer",
                color: "secondary",
            },
        ],
        time: "1:00 PM",
    },
    {
        id: 2,
        shortName: "CH",
        name: "Cameron Hill",
        color: "success",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
    },
    {
        id: 3,
        shortName: "EH",
        name: "Esther Howard",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
            {
                title: "Task",
                color: "success",
            },
        ],
        time: "1:00 PM",
    },
    {
        id: 4,
        shortName: "CW",
        name: "Cameron Williamson",
        color: "success",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
    },
];

export const draftEmailData: InboxEmailType[] = [
    {
        id: 1,
        name: "Ralph Edwards",
        image: "3.png",
        color: "primary",
        message: "Your Order #224820098 has been Confirmed -",
        subMessage:
            "A collection of textile samples lay spread out on the table...",
        time: "1:00 PM",
    },
    {
        id: 2,
        name: "Ronald Richards",
        image: "6.jpg",
        color: "primary",
        badge: [
            {
                title: "Update.Zip",
                color: "light",
            },
        ],
        message: "Confirm your booking id -",
        subMessage:
            "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        time: "7 April",
    },
    {
        id: 3,
        shortName: "CW",
        name: "Cameron Williamson",
        color: "success",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
    },
    {
        id: 4,
        name: "Jacob Jones",
        color: "primary",
        image: "12.png",
        message: "Welcome to our new office -",
        subMessage:
            "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        time: "01 April",
    },
    {
        id: 5,
        name: "Ralph Edwards",
        color: "primary",
        image: "3.png",
        message: "Your Order #224820098 has been Confirmed -",
        subMessage: "A collection of textile samples lay spread out on the table -",
        time: "1:00 PM",
    },
];

export const sentEmailData: InboxEmailType[] = [
    {
        id: 1,
        image: "14.png",
        name: "Brooklyn Simmons",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "offer",
                color: "secondary",
            },
        ],
        time: "7:50 AM",
    },
    {
        id: 2,
        image: "6.jpg",
        name: "Marvin McKinney",
        color: "primary",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "2:30 PM",
    },
    {
        id: 3,
        shortName: "EH",
        name: "Esther Howard",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
            {
                title: "Task",
                color: "success",
            },
        ],
        time: "1:00 PM",
    },
    {
        id: 4,
        shortName: "JW",
        name: "Jack Williamson",
        color: "primary",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
    },
];

export const inboxEmailData: InboxEmailType[] = [
    {
        id: 1,
        image: "6.jpg",
        name: "Marvin McKinney",
        color: "primary",
        message: "New comments on MSR2024 draft presentation -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
        ],
        time: "2:30 AM",
        star: false,
    },
    {
        id: 2,
        image: "3.png",
        name: "Brooklyn Simmons",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        badge: [
            {
                title: "deadline",
                color: "primary",
            },
        ],
        time: "7:50 AM",
        star: false,
    },
    {
        id: 3,
        shortName: "EH",
        name: "Esther Howard",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "work",
                color: "success",
            },
        ],
        time: "1:00 PM",
        star: false,
    },
    {
        id: 4,
        shortName: "CW",
        name: "Cameron Williamson",
        color: "primary",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        star: false,
    },
    {
        id: 5,
        image: "6.jpg",
        name: "Ronald Richards",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident - Samsa was a travelling",
        badge: [
            {
                title: "Update.Zip",
                color: "light",
            },
        ],
        time: "7 April",
        star: false,
    },
    {
        id: 6,
        image: "10.jpg",
        name: "Darlene Robertson",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda ...",
        badge: [
            {
                title: "Import File..",
                color: "light",
            },
        ],
        time: "04 April",
        star: false,
    },
    {
        id: 7,
        image: "12.png",
        name: "Jacob Jones",
        color: "primary",
        message: "Welcome to our new office -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        time: "01 April",
        star: false,
    },
    {
        id: 8,
        image: "3.png",
        name: "Ralph Edwards",
        color: "primary",
        message: "Your Order #224820098 has been Confirmed-",
        subMessage:
            "A collection of textile samples lay spread out on the table...",
        time: "1:00 PM",
        star: false,
    },
    {
        id: 9,
        image: "10.jpg",
        name: "Darlene Robertson",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda ...",
        badge: [
            {
                title: "Import File..",
                color: "light",
            },
        ],
        time: "04 April",
        star: false,
    },
    {
        id: 10,
        shortName: "EH",
        name: "Esther Howard",
        color: "primary",
        message: "Confirm your booking id -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "work",
                color: "success",
            },
        ],
        time: "1:00 PM",
        star: false,
    },
    {
        id: 11,
        image: "6.jpg",
        name: "Marvin McKinney",
        color: "primary",
        message: "New comments on MSR2024 draft presentation -",
        subMessage:
            "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badge: [
            {
                title: "new",
                color: "primary",
            },
        ],
        time: "2:30 AM",
        star: false,
    },
    {
        id: 12,
        shortName: "CW",
        name: "Cameron Williamson",
        color: "primary",
        message: "Very fiction Link -",
        subMessage:
            "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        star: false,
    },
];

export const mailHeader = [
    {
        icon: "sms",
        tooltip: "Archive",
    },
    {
        icon: "bookmark",
        tooltip: "Bookmark",
        className: "bookmark-box",
    },
    {
        icon: "spam",
        tooltip: "Spam",
    },
    {
        icon: "mail-trash",
        tooltip: "Trash",
        className: "stroke-danger",
    },
    {
        icon: "setting",
        tooltip: "Settings",
    },
];

export const userBodyData = [
    { text: 'Dear Customer,' },
    { text: 'We regret to notify you that an unauthorized attempt was made to access your account. Our system discovered suspicious activity, and we acted right away to safeguard your personal data.' },
    { text: 'Please change your login information by clicking the following link in order to safeguard your account:' },
    { text: 'Please be aware that your account may be temporarily suspended if no action is taken within 24 hours. We urge you to take immediate action to prevent any inconvenience.' },
    { text: 'We sincerely apologize for any inconvenience this may cause and thank you for your immediate attention to this matter.' },
]

export const mailBodyItems = ['All', 'None', 'Read', 'Unread', 'Starred', 'Unstarred']