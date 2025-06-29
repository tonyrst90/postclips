import { FileText, Mail, Settings, User } from "react-feather";

export const notificationData = [
    {
        image: "5.png",
        title: "Ralph Edwards ",
        strongText: "wants to edit ",
        subText: 'tetrisly design system ',
        subTitle: "2hrs Ago",
        color: "primary"
    },
    {
        image: "6.jpg",
        title: "Jenny Wilson ",
        strongText: "Completed ",
        subText: ' Create new component ',
        subTitle: "2.15pm",
        color: "secondary"
    },
    {
        image: "7.png",
        title: "Jenny Wilson mentioned you in rewrite button component",
        subTitle: "3.10pm",
        line:true
    }
]

export const messageData = [
    {
        image: "3.png",
        statusClass: "Do you want to go see movie?",
        userName: "Helen Walter",
    },
    {
        image: "6.jpg",
        statusClass: "Thank you for rating us.",
        userName: "Jason Borne",
    },
    {
        image: "10.jpg",
        statusClass: "What`s the project report update?",
        userName: "Sarah Loren",
    },
];

export const cartsData = [
    {
        image: "06.jpg",
        userName: "Winter T-shirt",
        amount: "1 X $ 299.00"
    },
    {
        image: "02.jpg",
        userName: "Men Shirt",
        amount: "1 X $ 299.00"
    }
]

export const userProfileData = [
    {
        icon: <User />,
        title: "Account",
        link: "/app/users/user_profile",
    },
    // {
    //     icon: <Mail />,
    //     title: "Inbox",
    //     link: "/app/email/letter_box",
    // },
    // {
    //     icon: <FileText />,
    //     title: "Taskboard",
    //     link: "/app/tasks",
    // },
    {
        icon: <Settings />,
        title: "Settings",
        link: "/app/users/edit_profile",
    },
];

export const bookMarkData = [
    {
        icon: "form",
        path: `/forms/form_controls/validation_form`,
        title: "Form",
    },
    {
        icon: "user",
        path: `/app/users/user_profile`,
        title: "Profile",
    },
    {
        icon: "table",
        path: `/table/reactstrap_table/basic_table`,
        title: "Tables",
    },
];

export let languageData = [
    {
        languageParameter: "en",
        languageName: "English",
        languageIconClassName: "us",
        subTitle: "US"
    },
    {
        languageParameter: "du",
        languageName: "Deutsch",
        languageIconClassName: "de",
    },
    {
        languageParameter: "es",
        languageName: "Español",
        languageIconClassName: "es",
    },
    {
        languageParameter: "fr",
        languageName: "Français",
        languageIconClassName: "fr",
    },
    {
        languageParameter: "pt",
        languageName: "Português",
        languageIconClassName: "pt",
        subTitle: "BR"
    },
    {
        languageParameter: "cn",
        languageName: "简体中文",
        languageIconClassName: "cn",
    },
    {
        languageParameter: "ae",
        languageName: "لعربي",
        languageIconClassName: "ae",
        subTitle: "ae"
    },
];