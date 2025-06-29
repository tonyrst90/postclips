import { AlertCircle, AlertTriangle, CheckCircle } from "react-feather";

export const basicTableWithBorderSubTitle = [
    {
        text: "Use a class",
        code: " table ",
    },
    {
        text: "to any table, and",
        code: " .border-bottom-* "
    },
    {
        text: "class for Border bottom color"
    }
];

export const inverseTableSubTitle = [
    {
        text: "Use a class",
        code: " table-inverse ",
    },
    {
        text: "inside table element."
    }
];

export const hoverableRowsSubTitle = [
    {
        text: "Hoverable row use a class",
        code: " table-hover ",
    },
    {
        text: "and for Horizontal border use a class",
        code: " .table-border-horizontal "
    },
    {
        text: ", Solid border Use a class",
        code: " .border-solid .table "
    },
    {
        text: "class."
    }
];

export const inverseTablePrimarySubTitle = [
    {
        text: "Use a class",
        code: " .bg-info,.bg-success,.bg-warning and .bg-danger classes. ",
    },
    {
        text: "with light text on dark backgrounds inside table element.",
    },
    {
        text: "To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal",
    }
];

export const captionSubTitle = [
    {
        text: "A",
        code: " <caption> ",
    },
    {
        text: "functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.",
    }
];

export const tableHeadOptionsSubTitle = [
    {
        text: "Similar to tables , use the modifier classes",
        code: " .table-[color] ",
    },
    {
        text: "to make",
        code: " thead "
    },
    {
        text: "appear in any color."
    }
];

export const stripedRowWithInverseTableSubTitle = [
    {
        text: "Use",
        code: " .table-striped ",
    },
    {
        text: "to add zebra-striping to any table row within the",
    },
    {
        text: ". This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported."
    }
];

export const breckPointSpecificSubTitle = [
    {
        text: "Use",
        code: ' .table-responsive"❴-sm|-md|-lg|-xl|-xxl❵" ',
    },
    {
        text: "functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.",
    }
];

export const responsiveTablesSubTitle = [
    {
        text: "A",
        code: ' .table-responsive ,.light-card ',
    },
    {
        text: "inside table element.",
    }
];

export const sizeTableSubTitle = [
    {
        text: "Example of Extra large table, Add",
        code: ' .table-xl ',
    },
    {
        text: "class to the",
        code: " .table "
    },
    {
        text: ", Large table Add",
        code: " .table-lg "
    },
    {
        text: ", Default table Add",
        code: " .table-de "
    },
    {
        text: ", Small table Add",
        code: " .table-sm "
    },
    {
        text: ", Extra Small table Add",
        code: " .table-xs "
    },
    {
        text: "to create a table."
    }
];

export const customTableSubTitle = [
    {
        text: "Use class",
        code: ' table-hover, table-striped table-*table-info,table-success,table-success,table-info,table-danger,table-primary,table-secondary,table-light,table-active ',
    },
    {
        text: "inside table element.",
    }
];

export const dashedBorderSubTitle = [
    {
        text: "Dashed border use class",
        code: ' table-dashed ',
    },
    {
        text: ", for Dotted border use class",
        code: " .table-dotted "
    },
    {
        text: ", for Double border use class",
        code: " .table-Double "
    }
];

export const basicTableHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "First Name" },
    { id: 3, head: "Last Name" },
    { id: 4, head: "Username" },
    { id: 5, head: "Designation" },
    { id: 6, head: "Company" },
    { id: 7, head: "Language" },
    { id: 8, head: "Country" },
];

export const basicTableBody = [
    {
        id: 1,
        color: "secondary",
        image: '1.jpg',
        firstname: "Ram Jacob",
        lastName: "Wolfe",
        userName: "RamJacob@twitter",
        designation: "Developer",
        company: "Apple Inc.",
        language: "Php",
        country: "IND",
        badgeColor: "danger",
    },
    {
        id: 2,
        color: "success",
        image: '2.jpg',
        firstname: "John Deo",
        lastName: "Gummer",
        userName: "JohnDeo@twitter",
        designation: "Designer",
        company: "Hewlett packard",
        language: "Html",
        country: "US",
        badgeColor: "primary",
    },
    {
        id: 3,
        color: "info",
        image: '3.jpg',
        firstname: "Elana John",
        lastName: "Cazale",
        userName: "ElanaJohn@twitter",
        designation: "Designer",
        company: "Microsoft",
        language: "Pug",
        country: "UK",
        badgeColor: "danger",
    },
    {
        id: 4,
        color: "warning",
        image: '7.jpg',
        firstname: "Meryl Streep",
        lastName: "Roberts",
        userName: "MerylStreep@twitter",
        designation: "Developer",
        company: "Tata Ltd.",
        language: "React",
        country: "IDN",
        badgeColor: "success",
    },
    {
        id: 5,
        color: "danger",
        image: '2.png',
        firstname: "Emma Stone",
        lastName: "Stone",
        userName: "EmmaStone@twitter",
        designation: "Developer",
        company: "Wipro Ltd.",
        language: "Vue",
        country: "IRN",
        badgeColor: "primary",
    },
    {
        id: 6,
        color: "light",
        image: '3.png',
        firstname: "Eliana Jons",
        lastName: "Jons",
        userName: "ElianaJons@twitter",
        designation: "Developer",
        company: "Info Ltd.",
        language: "Vue",
        country: "IRN",
        badgeColor: "success",
    },
];

export const inverseTableHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "First Name" },
    { id: 3, head: "Last Name" },
    { id: 4, head: "Office" },
    { id: 5, head: "Position" },
    { id: 6, head: "Salary" },
    { id: 7, head: "Join Date" },
    { id: 8, head: "Age" },
];

export const inverseTableBody = [
    {
        id: 1,
        firstName: "Stephan",
        lastName: "Laiten",
        office: "Tokyo",
        position: "Accountant",
        salary: "$2100.00",
        joinDate: "21/01/2024",
        age: 20,
    },
    {
        id: 2,
        firstName: "Fay",
        lastName: "Van Damme",
        office: "London",
        position: "CEO",
        salary: "$1420.00",
        joinDate: "14/02/2024",
        age: 22,
    },
    {
        id: 3,
        firstName: "Brevin",
        lastName: "Oleveria",
        office: "New York",
        position: "Software Engineer",
        salary: "$1340.00",
        joinDate: "04/06/2024",
        age: 18,
    },
    {
        id: 4,
        firstName: "Regina",
        lastName: "Ottandy",
        office: "France",
        position: "Pre-sale Support",
        salary: "$3400.00",
        joinDate: "10/08/2024",
        age: 25,
    },
    {
        id: 5,
        firstName: "Vani",
        lastName: "Shah",
        office: "Los Angeles",
        position: "Senior Developer",
        salary: "$3500.00",
        joinDate: "23/07/2024",
        age: 28,
    },
];

export const hoverableRowsHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "Status" },
    { id: 3, head: "Signal Name" },
    { id: 4, head: "Security" },
    { id: 5, head: "Stage" },
    { id: 6, head: "Schedule" },
    { id: 7, head: "Team Lead" },
];

export const hoverableRowsBody = [
    {
        id: 1,
        icon: <AlertTriangle className="bg-light-success font-success" />,
        color: "success",
        status: "No Signal",
        signalName: "Astrid: NE Shared managed",
        security: "Medium",
        stage: "Triaged",
        schedule: 0.33,
        teamLead: "Chase Nguyen",
    },
    {
        id: 2,
        icon: <AlertTriangle className="bg-light-danger font-danger" />,
        color: "danger",
        status: "Offline",
        signalName: "Cosmo: prod shared ares",
        security: "Huge",
        stage: "Triaged",
        schedule: 0.39,
        teamLead: "Brie Furman",
    },
    {
        id: 3,
        icon: <AlertCircle className="bg-light-primary font-primary" />,
        color: "primary",
        status: "Online",
        signalName: "Phoenix: prod shared lyra-lists",
        security: "Minor",
        stage: "No Triaged",
        schedule: 3.12,
        teamLead: "Jeremy Lake",
    },
    {
        id: 4,
        icon: <CheckCircle className="bg-light-success font-success" />,
        color: "success",
        status: "No Signal",
        signalName: "Astrid: NE Shared managed",
        security: "Negligible",
        stage: "Triaged",
        schedule: 13.18,
        teamLead: "Angelica Howards",
    },
    {
        id: 5,
        icon: <CheckCircle className="bg-light-danger font-danger" />,
        color: "danger",
        status: "Online",
        signalName: "Astrid: NE Shared managed",
        security: "Medium",
        stage: "No Triaged",
        schedule: 5.33,
        teamLead: "Diane Okuma",
    },
];

export const inversePrimaryHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "First Name" },
    { id: 3, head: "Last Name" },
    { id: 4, head: "Company" },
    { id: 5, head: "Credit Volume" },
    { id: 6, head: "Username" },
    { id: 7, head: "Role" },
    { id: 8, head: "Country" },
];

export const inversePrimaryBody = [
    {
        id: 1,
        firstName: "Ram Jacob",
        lastName: "Wolfe",
        company: "Apple Inc.",
        salary: "$3500.00",
        email: "RamJacob@twitter",
        position: "Developer",
        country: "IND",
    },
    {
        id: 2,
        firstName: "John Deo",
        lastName: "Gummer",
        company: "Hewlett packard",
        salary: "$2400.00",
        email: "JohnDeo@twitter",
        position: "Designer",
        country: "US",
    },
    {
        id: 3,
        firstName: "Elana John",
        lastName: "Wolfe",
        company: "Microsoft",
        salary: "$2560.00",
        email: "ElanaJohn@twitter",
        position: "Designer",
        country: "UK",
    },
    {
        id: 4,
        firstName: "Meryl Streep",
        lastName: "Roberts",
        company: "Tata Ltd.",
        salary: "$1870.00",
        email: "MerylStreep@twitter",
        position: "Developer",
        country: "IND",
    },
    {
        id: 5,
        firstName: "Emma Stone",
        lastName: "Stone",
        company: "Wipro Ltd.",
        salary: "$4580.00",
        email: "EmmaStone@twitter",
        position: "Developer",
        country: "IRN",
    },
    {
        id: 6,
        firstName: "Eliana Jons",
        lastName: "Jons",
        company: "Info Ltd.",
        salary: "$4580.00",
        email: "ElianaJons@twitter",
        position: "Developer",
        country: "IRN",
    },
];

export const captionTableHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "Employee Name" },
    { id: 3, head: "Email" },
    { id: 4, head: "Experience" },
    { id: 5, head: "Sex" },
    { id: 6, head: "Contact No." },
    { id: 7, head: "Age" },
];

export const captionTableBody = [
    {
        id: 1,
        employeeName: "Elana Robbert",
        email: "ElanaRob@gmail.com",
        experience: "1 Year",
        sex: "Male",
        number: "+91 9789887777",
        age: 28,
    },
    {
        id: 2,
        employeeName: "Stiphen Deo",
        email: "Stiphen@yahoo.com",
        experience: "6 Month",
        sex: "Female",
        number: "+91 9874563210",
        age: 22,
    },
    {
        id: 3,
        employeeName: "Genelia Ottre",
        email: "Genelia@gmail.com",
        experience: "2 Days",
        sex: "Male",
        number: "+91 8794562135",
        age: 24,
    },
];

export const tableHeadOptionHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "First Name" },
    { id: 3, head: "Last Name" },
    { id: 4, head: "Username" },
];

export const tableHeadOptionBody = [
    {
        id: 1,
        firstName: 'Mark',
        lastName: 'Otto',
        userName: '@mdo',
    },
    {
        id: 2,
        firstName: 'Jacob',
        lastName: 'Thornton',
        userName: '@fat',
    },
    {
        id: 3,
        firstName: 'Larry',
        lastName: 'the Bird',
        userName: '@twitter',
    },
];

export const stripedRowInverseHead = [
    { id: 1, head: "Id" },
    { id: 2, head: "Dessert" },
    { id: 3, head: "Calories" },
    { id: 4, head: "Fat" },
    { id: 5, head: "Price" },
];

export const stripedRowInverseBody = [
    {
        id: 1,
        dessert: 'KitKat',
        calories: 518,
        fat: 26,
        price: 20,
    },
    {
        id: 2,
        dessert: 'Donut',
        calories: 452,
        fat: 25,
        price: 80,
    },
    {
        id: 3,
        dessert: 'Eclair',
        calories: 262,
        fat: 16,
        price: 10,
    },
];

export const breckpointSpecificHead = [
    { id: 1, head: "Id" },
    { id: 2, head: "Name" },
    { id: 3, head: "Order Id" },
    { id: 4, head: "Price" },
    { id: 5, head: "Quantity" },
    { id: 6, head: "Total" },
];

export const breckpointSpecificBody = [
    {
        id: 1,
        name: 'Iphone X Grey',
        orderId: 'C12345',
        price: '$12550',
        quantity: 1,
        total: '$12550',
    },
    {
        id: 2,
        name: 'Titan Watch',
        orderId: 'A14725',
        price: '$120',
        quantity: 2,
        total: '$250',
    },
    {
        id: 3,
        name: 'Apple Airpods',
        orderId: 'B54213',
        price: '$210',
        quantity: 1,
        total: '$210',
    },
];

export const responsiveLightBackgroundHead = [
    { id: 1, head: "Id" },
    { id: 2, head: "Task" },
    { id: 3, head: "Email" },
    { id: 4, head: "Phone" },
    { id: 5, head: "Assign" },
    { id: 6, head: "Date" },
    { id: 7, head: "Price" },
    { id: 8, head: "Status" },
    { id: 9, head: "Progress" },
];

export const responsiveLightBackgroundBody = [
    {
        id: 1,
        task: "Web Development",
        email: "Pixel@efo.com",
        phone: "+91 7874226671",
        assign: "Mark Jecno",
        date: "12/07/2022",
        price: "$2315.00",
        status: "Pending",
        progress: "75%",
        color: 'danger',
    },
    {
        id: 2,
        task: "Graphic Design",
        email: "Strap@google.com",
        phone: "+91 8347855785",
        assign: "Elana John",
        date: "23/08/2022",
        price: "$4125.00",
        status: "Pending",
        progress: "45%",
        color: 'danger',
    },
    {
        id: 3,
        task: "WordPress",
        email: "Pixelstrap@gmail.com",
        phone: "+91 635609347",
        assign: "John Deo",
        date: "15/04/2022",
        price: "$6123.00",
        status: "Done",
        progress: "100%",
        color: 'success',
    }
];

export const sizingTablesHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "Employee Name" },
    { id: 3, head: "Date" },
    { id: 4, head: "Status" },
    { id: 5, head: "Hours" },
    { id: 6, head: "Performance" },
];

export const sizingTablesBody = [
    {
        id: 1,
        employeeName: "Mark Jecno",
        date: "22/08/2022",
        status: "On leave",
        hours: 0,
        performance: '29/30',
        color: 'danger',
    },
    {
        id: 2,
        employeeName: "Elana Robbert",
        date: "21/08/2022",
        status: "Present",
        hours: 10,
        performance: '30/30',
        color: 'success',
    },
    {
        id: 3,
        employeeName: "John Deo",
        date: "18/08/2022",
        status: "On leave",
        hours: 8,
        performance: '28/30',
        color: 'danger',
    }
];

export const customColorHoverStrippedHead = [
    { id: 1, head: "Id" },
    { id: 2, head: "Film Title" },
    { id: 3, head: "Released" },
    { id: 4, head: "Studio" },
    { id: 5, head: "Budget" },
    { id: 6, head: "Domestic Gross" },
];

export const customColorHoverStrippedBody = [
    {
        id: 1,
        title: "Frozen",
        year: 2013,
        studio: "Disney",
        budget: "$150,000,000",
        boxOffice: "$400,953,009"
    },
    {
        id: 2,
        title: "Minions",
        year: 2015,
        studio: "Universal",
        budget: "$74,000,000",
        boxOffice: "$336,045,770"
    },
    {
        id: 3,
        title: "Zootopia",
        year: 2016,
        studio: "Disney",
        budget: "$150,000,000",
        boxOffice: "$341,268,248"
    },
    {
        id: 4,
        title: "Finding Dory",
        year: 2016,
        studio: "Disney Pixar",
        budget: "$175,000,000",
        boxOffice: "$486,295,561"
    },
    {
        id: 5,
        title: "Toy Story 3",
        year: 2010,
        studio: "Disney Pixar",
        budget: "$200,000,000",
        boxOffice: "$415,004,880"
    }
];

export const dashedBorderHeader = [
    { id: 1, head: "Id" },
    { id: 2, head: "Classname" },
    { id: 3, head: "Type" },
    { id: 4, head: "Hours" },
    { id: 5, head: "Trainer" },
    { id: 6, head: "Spots" },
];

export const dashedBorderBody = [
    {
        id: 1,
        activity: "Crit Cardio",
        category: "Gym",
        time: "9:00 AM - 11:00 AM",
        instructor: "Aaron Chapman",
        capacity: 10
    },
    {
        id: 2,
        activity: "Zumba Dance",
        category: "Dance",
        time: "8:00 AM - 9:00 AM",
        instructor: "Donna Wilson",
        capacity: 12
    },
    {
        id: 3,
        activity: "Like a butterfly",
        category: "Boxing",
        time: "9:00 AM - 10:00 AM",
        instructor: "Randy Porter",
        capacity: 13
    },
    {
        id: 4,
        activity: "Pilates Reformer",
        category: "Gym",
        time: "7:00 AM - 8:30 AM",
        instructor: "Aaron Chapman",
        capacity: 15
    },
    {
        id: 5,
        activity: "Mind & Body",
        category: "Yoga",
        time: "8:00 AM - 9:00 AM",
        instructor: "Adam Stewart",
        capacity: 20
    }
]