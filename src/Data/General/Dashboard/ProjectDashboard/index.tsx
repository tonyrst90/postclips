import { CommonDropdown } from "@/Components/General/Dashboard/Common/CommonDropdown";
import { ImagePath } from "@/Constant";
import { ProjectSummeryTableBodyType } from "@/Types/Dashboard.type";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import { TableColumn } from "react-data-table-component";

//chart
export const totalRevenueChartData: ApexOptions = {
    series: [
        {
            name: "Earning",
            data: [78, 45, 60, 78, 78, 45, 25, 50, 60, 60, 78, 40],
        },
        {
            name: "Expense",
            data: [-70, -70, -40, -30, -70, -30, -25, -45, -40, -50, -70, -50],
        },
    ],
    chart: {
        type: "bar",
        height: 316,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    colors: ["#003FDD", "#FF9766"],
    plotOptions: {
        bar: {
            columnWidth: "80%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    stroke: {
        width: 10,
        colors: ["#fff"]
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                fontSize: "14px",
                colors: "$black",
                fontWeight: 500,
                fontFamily: "Lexend, sans-serif",
            },
        },
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
            style: {
                fontSize: "13px",
                colors: "#959595",
                fontFamily: "Lexend, sans-serif",
            },
        },
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1501,
            options: {
                chart: {
                    height: 298,
                },
            },
        },
        {
            breakpoint: 480,
            options: {
                plotOptions: {
                    bar: {
                        columnWidth: "150%",
                    },
                },
            },
        },
    ],
};

export const monthlyChart: ApexOptions = {
    series: [
        {
            name: "Total",
            data: [10, 5, 10, 7, 40, 20, 30, 27, 40]
        },
    ],
    chart: {
        type: "area",
        toolbar: {
            show: false,
        },
    },
    colors: ['#003FDD'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
        curve: "smooth",
    },
    grid: {
        show: false,
    },
    tooltip: {
        x: {
            show: false,
        },
        marker: {
            show: false,
        },
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
};

function generateData(baseval: number, count: number, yrange: { min: number; max: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

export const statisticsChartData: ApexOptions = {
    chart: {
        height: 252,
        type: "bubble",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [
        {
            name: "Product1",
            data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
                min: 20,
                max: 55,
            }),
        },
        {
            name: "Product2",
            data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
                min: 10,
                max: 55,
            }),
        },
        {
            name: "Product3",
            data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
                min: 10,
                max: 55,
            }),
        },
        {
            name: "Product4",
            data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
                min: 10,
                max: 55,
            }),
        },
    ],
    fill: {
        type: "gradient",
    },
    legend: {
        show: false,
    },
    xaxis: {
        tickAmount: 12,
        type: "datetime",
        labels: {
            rotate: 0,
            style: {
                fontSize: "13px",
                colors: "#959595",
                fontFamily: "Lexend, sans-serif",
            },
        },
        axisBorder: {
            show: false
        },
    },
    theme: {
        palette: "palette2",
    },
    colors: ["#003FDD", "#FF9766", "#61AE41"],
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            return '<ul class="p-2">' +
                '<li><b>Order</b>: ' + w.globals.labels[dataPointIndex] + '</li>' +
                '</ul>';
        }
    }
};

export const companyViewChartData: ApexOptions = {
    series: [
        {
            name: "This Month ",
            type: "area",
            data: [215, 260, 360, 420, 320, 280, 360]
        },
        {
            name: "This Month",
            type: "area",
            data: [90, 130, 280, 350, 400, 350, 400],
        },
    ],
    chart: {
        height: 330,
        type: "area",
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: [3, 3],
        curve: "straight",
        dashArray: [0, 6],
    },
    colors: ["#FF9766", "#003FDD"],
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 0,
            fillColor: "#fff",
            strokeColor: "#FF9766",
            size: 5,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 1,
            fillColor: "#fff",
            strokeColor: "#FF9766",
            size: 5,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: "#fff",
            strokeColor: "#FF9766",
            size: 5,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "#fff",
            strokeColor: "#FF9766",
            size: 5,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: "#fff",
            strokeColor: "#FF9766",
            size: 5,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "#fff",
            strokeColor: "#FF9766",
            size: 5,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 6,
            fillColor: "#fff",
            strokeColor: "#FF9766",
            size: 5,
            shape: "circle"
        },
        ],
    },
    xaxis: {
        categories: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                fontSize: "13px",
                colors: "#959595",
                fontFamily: "Lexend, sans-serif",
            },
        },
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val + "" + "k";
            },
            style: {
                fontSize: "14px",
                colors: "$black",
                fontWeight: 500,
                fontFamily: "Lexend, sans-serif",
            },
        },
    },
    fill: {
        colors: ["#FF9766", "#003FDD"],
        type: ["gradient", "gradient"],
        gradient: {
            shade: "light",
            type: "vertical",
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 100, 0, 0],
        },
    },
    grid: {
        borderColor: "#f1f1f1",
    },
    legend: {
        show: false,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Deliveries' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

export const memberChartData: ApexOptions = {
    series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    chart: {
        type: "donut",
        height: 80,
        width: 80,
    },
    colors: [
        "#003FDD",
        "#003FDD",
        "#003FDD",
        "#003FDD",
        "#003FDD",
        "#003FDD",
        "#003FDD",
        "#003FDD",
        "#003FDD",
        "#ced0fb",
        "#ced0fb",
        "#ced0fb",
    ],
    legend: {
        show: false,
    },
    stroke: {
        width: 1,
        colors: ["var(--white)"],
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    value: {
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        color: "#000",
                        offsetY: -12,
                    },
                    total: {
                        show: true,
                        showAlways: false,
                        label: "Total",
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                    },
                },
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: "none",
            },
        },
    },
};

export const memberChartDataTwo: ApexOptions = {
    series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    chart: {
        type: "donut",
        height: 80,
        width: 80,
    },
    colors: [
        "#FF9766",
        "#FF9766",
        "#FF9766",
        "#FF9766",
        "#FF9766",
        "#FF9766",
        "#FF9766",
        "#ffe0d1",
        "#ffe0d1",
        "#ffe0d1",
        "#ffe0d1",
        "#ffe0d1",
    ],
    legend: {
        show: false,
    },
    stroke: {
        width: 1,
        colors: ["var(--white)"],
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    value: {
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        color: "#000",
                        offsetY: -12,
                    },
                    total: {
                        show: true,
                        showAlways: false,
                        label: "Total",
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                    },
                },
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: "none",
            },
        },
    },
};

export const memberChartDataThree: ApexOptions = {
    series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    chart: {
        type: "donut",
        height: 80,
        width: 80,
    },
    colors: [
        "#61AE41",
        "#61AE41",
        "#61AE41",
        "#61AE41",
        "#61AE41",
        "#61AE41",
        "#d0e7c6",
        "#d0e7c6",
        "#d0e7c6",
        "#d0e7c6",
        "#d0e7c6",
        "#d0e7c6",
    ],
    legend: {
        show: false,
    },
    stroke: {
        width: 1,
        colors: ["var(--white)"],
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    value: {
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        color: "#000",
                        offsetY: -12,
                    },
                    total: {
                        show: true,
                        showAlways: false,
                        label: "Total",
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                    },
                },
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: "none",
            },
        },
    },
};

export const memberChartDataFour: ApexOptions = {
    series: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    chart: {
        type: "donut",
        height: 80,
        width: 80,
    },
    colors: [
        "#F81F58",
        "#F81F58",
        "#F81F58",
        "#F81F58",
        "#F81F58",
        "#fdbccd",
        "#fdbccd",
        "#fdbccd",
        "#fdbccd",
        "#fdbccd",
        "#fdbccd",
        "#fdbccd"
    ],
    legend: {
        show: false,
    },
    stroke: {
        width: 1,
        colors: ["var(--white)"],
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    value: {
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        color: "#000",
                        offsetY: -12,
                    },
                    total: {
                        show: true,
                        showAlways: false,
                        label: "Total",
                        fontSize: "11px",
                        fontFamily: "Rubik, sans-serif",
                    },
                },
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: "none",
            },
        },
    },
};

//data
export const websiteDesignData = [
    {
        color: "primary",
        title: "Website Design",
        completeValue: 8,
        progressValue: 70,
        userName: "Brave Wings",
        date: "25 April 2024",
        svgIcon: "website-design",
    },
    {
        color: "secondary",
        title: "NFT App Design",
        completeValue: 4,
        progressValue: 50,
        userName: "Brave Wings",
        date: "25 April 2024",
        svgIcon: "nft-app",
    },
];

export const todayTaskNav = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Important' },
    { id: 3, title: 'Notes' },
    { id: 4, title: 'Links' },
]

export const todayTaskTabContentData = [
    {
        id: 1,
        detail: "Create a Userflow. Social Application Design",
        status: "Done",
        color: "success",
        date: "Nov 03,2024",
    },
    {
        id: 2,
        detail: "Slimmuch Product Design Main Page",
        status: "Pending",
        color: "secondary",
        date: "Aug 06,2024",
    },
    {
        id: 3,
        detail: "Design of Interactive Prototypes",
        status: "In Progress",
        color: "primary",
        date: "Nov 03,2024",
    },
    {
        id: 4,
        detail: "Create Userflow Social Application Design",
        status: "Done",
        color: "success",
        date: "Dec 20,2024",
    },
    {
        id: 5,
        detail: "Create Userflow Social Application Design",
        status: "In Progress",
        color: "primary",
        date: "Sep 20,2024",
    },
];

export const teamMembersBodyData = [
    {
        image: "33.png",
        name: "David",
        designation: "Designer",
        hours: "10h",
        chart: memberChartData,
    },
    {
        image: "34.png",
        name: "Nasuha",
        designation: "Developer",
        hours: "65h",
        chart: memberChartDataTwo,
    },
    {
        image: "35.png",
        name: "Induan",
        designation: "Designer",
        hours: "25h",
        chart: memberChartDataThree,
    },
    {
        image: "36.png",
        name: "Wonkyu",
        designation: "Tester",
        hours: "38h",
        chart: memberChartDataFour,
    },
];

export const upcomingDeadlinesBodyData = [
    {
        image: "29.png",
        name: "Kyuwon",
        task: "Mobile",
        deadLine: "10 Aug",
        color: "primary",
        value: "70",
    },
    {
        image: "30.png",
        name: "Junsung",
        task: "Landing",
        deadLine: "3 Oct",
        color: "secondary",
        value: "20",
    },
    {
        image: "31.png",
        name: "Joohe",
        task: "NFT",
        deadLine: "26 Dec",
        color: "success",
        value: "70",
    },
    {
        image: "32.png",
        name: "Wonkyu",
        task: "Hire",
        deadLine: "10 Jun",
        color: "danger",
        value: "30",
    },
];

export const mobileAppData = [
    {
        svgIcon: "mobile-app",
        title: "Mobile App",
        color: "primary",
        email: "joohe.lee@gmail.com",
        clientDetails: [
            {
                color: "primary",
                title: "Due Date",
                date: "25-10-2024",
            },
            {
                color: "primary",
                title: "Budget",
                date: "$36,000.00",
            },
            {
                title: "Client",
                date: "Joohee Lee",
            },
        ],
        userDetail: ["20.png", "21.png", "22.png"],
        buttonName: "Pending",
        btnColor: "secondary",
    },
    {
        class: "banking-web",
        svgIcon: "banking-web",
        color: "secondary",
        title: "Banking Web",
        email: "wonkyu@gmail.com",
        clientDetails: [
            {
                color: "secondary",
                title: "Due Date",
                date: "12-04-2024",
            },
            {
                title: "Budget",
                date: "$42,500.00",
            },
            {
                color: "secondary",
                title: "Client",
                date: "Wonkyu Min",
            },
        ],
        userDetail: ["23.png", "24.png", "25.png"],
        buttonName: "Done",
        btnColor: "success",
    },
    {
        class: "finance-app",
        svgIcon: "finance-app",
        color: "success",
        title: "Finance App",
        email: "yongjae@gmail.com",
        clientDetails: [
            {
                color: "success",
                title: "Due Date",
                date: "10-09-2024",
            },
            {
                color: "success",
                title: "Budget",
                date: "$15,600.00",
            },
            {
                title: "Client",
                date: "Yongjae Choi",
            },
        ],
        userDetail: ["26.png", "27.png"],
        buttonName: "Inprogress",
        btnColor: "primary",
    },
];

const ScrollImage = ({ image }: any) => (
    <div className="user-details customers">
        <ul>
            {image.map((data: string, i: number) => (
                <li className="d-inline-block" key={i}>
                    <Image src={`${ImagePath}/dashboard-3/user/${data}`} width={24} height={24} alt="user" />
                </li>
            ))}
        </ul>
    </div>
);

export const projectSummeryTableHeaderData: TableColumn<ProjectSummeryTableBodyType>[] =
    [
        {
            name: "Project Name",
            selector: (row) => `${row.projectName}`,
            sortable: true,
        },
        {
            name: "Project Type",
            selector: (row) => `${row.projectType}`,
            sortable: true,
        },
        {
            name: "Teams",
            cell: (row) => <ScrollImage image={row.teams} />,
            sortable: true,
        },
        {
            name: "Start Date",
            selector: (row) => `${row.startDate}`,
            sortable: true,
        },
        {
            name: "Location",
            selector: (row) => `${row.location}`,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => `${row.status}`,
            sortable: true,
        },
        {
            name: "",
            selector: (row) => `${row.status}`,
            sortable: true,
            cell: () => <CommonDropdown />
        }
    ];

export const projectSummeryTableBodyData = [
    {
        projectName: "Landing page",
        projectType: "Website",
        teams: ["14.png", "15.png", "16.png"],
        startDate: "Oct 26,2024",
        location: "UK-John Peter",
        status: "Active",
        dropdown: true
    },
    {
        projectName: "NFT Website Page",
        projectType: "Campaign",
        teams: ["17.png", "3.png", "7.png"],
        startDate: "Nov 10,2024",
        location: "Srinsoft technology",
        status: "Pending",
        dropdown: true
    },
    {
        projectName: "Email Design",
        projectType: "Design",
        teams: ["12.png", "18.png", "19.png"],
        startDate: "Feb 26,2024",
        location: "CA William sck",
        status: "Active",
        dropdown: true
    },
    {
        projectName: "Banner Design",
        projectType: "Banner",
        teams: ["14.png", "15.png", "16.png"],
        startDate: "Nov 10,2024",
        location: "USA",
        status: "Pending",
        dropdown: true
    },
    {
        projectName: "Redesign Layout",
        projectType: "Landing",
        teams: ["17.png", "3.png", "7.png"],
        startDate: "Jan 10,2024",
        location: "Design technology",
        status: "Active",
        dropdown: true
    },
    {
        projectName: "Login & Sign Up Ui",
        projectType: "Ui Design",
        teams: ["12.png", "18.png", "19.png"],
        startDate: "Feb 26,2024",
        location: "CA William sck",
        status: "Active",
        dropdown: true
    },
    {
        projectName: "Front-End Website",
        projectType: "Website",
        teams: ["14.png", "15.png", "16.png"],
        startDate: "Nov 26,2024",
        location: "New zealand",
        status: "Active",
        dropdown: true
    },
    {
        projectName: "NFT Website Page",
        projectType: "Campaign",
        teams: ["17.png", "3.png", "7.png"],
        startDate: "Nov 10,2024",
        location: "Srinsoft technology",
        status: "Pending",
        dropdown: true
    },
    {
        projectName: "Social Design",
        projectType: "Product Design",
        teams: ["12.png", "18.png", "19.png"],
        startDate: "Feb 19,2024",
        location: "CA William",
        status: "Active",
        dropdown: true
    },
];