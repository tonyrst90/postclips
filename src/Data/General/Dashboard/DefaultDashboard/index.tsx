import { ApexOptions } from "apexcharts";

//charts
export const earningsChartData: ApexOptions = {
    series: [
        {
            name: "Earnings",
            data: [25, 16, 27, 22, 22, 18, 22, 12, 16, 16, 30, 22, 32],
        },
    ],
    chart: {
        type: "area",
        height: 203,
        offsetY: -30,
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 2,
            color: "#003FDD",
            opacity: 0.2,
        },
    },
    colors: ["#003FDD"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 100, 100],
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
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
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: "smooth",
        width: 3,
    },
    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 6,
                fillColor: "#003FDD",
                strokeColor: "#fff",
                size: 6,
                shape: "circle",
            },
        ],
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex }) {
            return (
                '<div class="apex-tooltip p-2">' +
                "<span>" +
                '<span class="bg-primary">' +
                "</span>" +
                "Project Created" +
                "<h3>" +
                "$" +
                series[seriesIndex][dataPointIndex] +
                "<h3/>" +
                "</span>" +
                "</div>"
            );
        },
    },
};

export const expensesChartData: ApexOptions = {
    series: [
        {
            name: "Earning",
            data: [92, 64, 43, 80, 58, 92, 46, 76],
        },
        {
            name: "Earning",
            data: [20, 48, 69, 32, 54, 20, 66, 36],
        },
    ],
    chart: {
        type: "bar",
        offsetY: -10,
        toolbar: {
            show: false,
        },
        height: 203,
        stacked: true,
    },
    states: {
        hover: {
            filter: {
                type: "darken",
            },
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 3,
            columnWidth: "35%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        yaxis: {
            lines: {
                show: false,
            },
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
    },
    yaxis: {
        show: false,
    },
    fill: {
        opacity: 1,
        colors: ["#F2F5FA", "#FF9766"],
    },
    legend: {
        show: false,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex }) {
            return (
                '<div class="apex-tooltip p-2">' +
                "<span>" +
                '<span class="bg-primary">' +
                "</span>" +
                "Expenses" +
                "<h3>" +
                "$" +
                series[seriesIndex][dataPointIndex] +
                "<h3/>" +
                "</span>" +
                "</div>"
            );
        },
    },
};

export const orderOverviewChartData: ApexOptions = {
    series: [
        {
            name: "Earning",
            type: "area",
            data: [55, 44, 47, 44, 50, 50, 55, 45, 32, 50, 60, 32, 38, 45, 40, 40, 50,],
        },
        {
            name: "Order",
            type: "line",
            data: [54, 64, 40, 50, 60, 80, 60, 70, 62, 50, 45, 40, 60, 65, 70],
        },
    ],
    chart: {
        height: 250,
        type: "line",
        stacked: false,
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 2,
            left: 4,
            blur: 4,
            color: "#000",
            opacity: 0.08,
        },
    },
    stroke: {
        width: [2, 2],
        curve: "smooth",
        dashArray: [0, 8],
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "50%",
        },
    },
    colors: ["#7064F5", "#FF9766"],
    fill: {
        type: ["gradient", "solid"],
        gradient: {
            shade: "light",
            type: "vertical",
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 100],
        },
    },
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Aug",
        "Sep",
    ],
    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 6,
                fillColor: "#7064F5",
                strokeColor: "var(--white)",
                size: 5,
            },
        ],
        hover: {
            size: 5,
            sizeOffset: 0,
        },
    },
    xaxis: {
        type: "category",
        tickAmount: 4,
        tickPlacement: "between",
        tooltip: {
            enabled: false,
        },
        axisBorder: {
            color: "var(--chart-border)",
        },
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        shared: true,
        intersect: false,
    },
    responsive: [
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 250,
                },
            },
        },
    ],
};

export const orderBarChartData: ApexOptions = {
    series: [
        {
            name: "Revenue",
            data: [
                72, 72, 63, 62, 66, 66, 66, 64, 51, 51, 64, 65, 38, 38, 36, 36, 55, 55,
                50, 50, 32, 32, 50, 50, 70, 70, 62, 62, 48, 48, 57, 57, 63, 63, 75, 75,
                58, 58, 72, 72, 58, 58, 72, 72, 112, 112, 72, 72, 63, 62, 66, 66, 66,
                64, 51, 51, 64, 65, 38, 38, 36, 36, 115, 115,
            ],
        },
    ],
    chart: {
        type: "bar",
        height: 180,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: "60%",
        },
    },
    colors: ["var(--light-bg)"],
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
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
    fill: {
        opacity: 0.7,
    },
    tooltip: {
        enabled: false,
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
    responsive: [
        {
            breakpoint: 405,
            options: {
                chart: {
                    height: 150,
                },
            },
        },
    ],
};

export const growthChartData: ApexOptions = {
    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [190, 0, 240, 0, 270, 0, 220, 0, 190, 0, 250, 0, 250, 0, 270, 0, 240,]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [220, 195, 280, 180, 250, 195, 250, 170, 290, 190, 220, 190, 230, 250, 190, 225, 225]
    }],
    chart: {
        height: 315,
        type: 'area',
        stacked: false,
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'stepline'
    },
    plotOptions: {
        bar: {
            columnWidth: '50px'
        }
    },
    colors: ['#bebebe', "#003FDD"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: true,
            }
        },
        yaxis: {
            lines: {
                show: true,
            }
        },
    },
    xaxis: {
        categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "July", "", "Aug", "", "Sep"],
        labels: {
            style: {
                fontFamily: 'Lexend, sans-serif',
                fontWeight: 600,
                colors: '#959595',
            },
        },
        axisBorder: {
            show: false
        },
    },
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        labels: {
            style: {
                fontFamily: 'Lexend, sans-serif',
                fontWeight: 600,
                colors: '#161616',
            },
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Growth' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

//data
export const topSellingProductBodyData = [
    {
        color: "primary",
        image: "1.png",
        productName: "Sneaker Shoes",
        id: "#A5647KB",
        couponCode: "PIX001",
        flagImage: "1.png",
        percentage: "-51",
        amount: "99.00",
    },
    {
        color: "primary",
        image: "2.png",
        productName: "Sweat Shirt",
        id: "#NB86H2E",
        couponCode: "PIX002",
        flagImage: "2.png",
        percentage: "-78",
        amount: "66.00",
    },
    {
        color: "primary",
        image: "3.png",
        productName: "Nike Travel Bag",
        id: "#UB654GH",
        couponCode: "PIX003",
        flagImage: "3.png",
        percentage: "-04",
        amount: "116.00",
    },
    {
        color: "primary",
        image: "4.png",
        productName: "Monster Cap",
        id: "#BAS4567",
        couponCode: "PIX004",
        flagImage: "4.png",
        percentage: "-60",
        amount: "99.00",
    },
];

export const recentOrderHead = ['No.', 'Customer Name', 'ID', 'Date', 'City', 'Status', 'Amount']

export const recentOrderBodyData = [
    {
        no: "1",
        image: "1.png",
        customerName: "Rocky Shoes",
        id: "8934",
        date: "01/12/2024",
        city: "Armenia",
        status: "Paid",
        color: "primary",
        amount: "238.80",
    },
    {
        no: "2",
        image: "2.png",
        customerName: "Nasuha Makusta",
        id: "6529",
        date: "12/10/2024",
        city: "Bhutan",
        status: "Pending",
        color: "secondary",
        amount: "654.95",
    },
    {
        no: "3",
        image: "3.png",
        customerName: "Induan Kastorika",
        id: "3659",
        date: "09/04/2024",
        city: "Ghana",
        status: "Done",
        color: "success",
        amount: "864.35",
    },
    {
        no: "4",
        image: "4.png",
        customerName: "Pogba Nehuntas",
        id: "2158",
        date: "10/05/2024",
        city: "Kenya",
        status: "Cancel",
        color: "danger",
        amount: "951.37",
    },
];

export const transactionHistoryBodyData = [
    {
        color: "primary",
        icon: "send",
        title: "Receipt from external Wallet",
        date: "Mar 21,2024, 4:45pm",
        status: "Completed",
        amount: "+ $248.00",
    },
    {
        color: "secondary",
        icon: "work",
        title: "Process refund to",
        date: "Feb 20,2024, 2:10pm",
        status: "Pending",
        amount: "+ $548.00",
    },
    {
        color: "success",
        icon: "graph",
        title: "Sending to Citizen",
        date: "Jun 17,2024, 12:45pm",
        status: "Verified",
        amount: "+ $953.00",
    },
    {
        color: "danger",
        icon: "bookmark",
        title: "Payment From #12345",
        date: "Oct 30,2024, 1:31pm",
        status: "Rejected",
        amount: "+ $349.00",
    },
];

export const notificationsFirstTabContent = [
    {
        id: 1,
        image: '5.png',
        title: 'Ralph Edwards ',
        strongText: 'wants to edit ',
        subText: 'tetrisly design system ',
        subTitle: ' 2hrs Ago',
        color: 'primary'
    },
    {
        id: 2,
        image: '6.png',
        title: 'Jenny Wilson ',
        strongText: 'Completed ',
        subText: 'Create new component ',
        subTitle: ' 2.15pm',
        color: 'secondary'
    },
    {
        id: 3,
        image: '7.png',
        title: 'Jenny Wilson mentioned you in rewrite button component ',
        subTitle: ' 3.10pm',
        line:true
    },
];

export const notificationsThreeTabContent = [
    {
        image: "5.png",
        name: "Ralph Edwards Started Following you.",
        time: "35 min Ago",
        dot: true,
    },
    {
        image: "6.png",
        name: "Jenny Wilson Requested to Follow",
        time: "1w Ago",
        dot: false,
    },
    {
        image: "7.png",
        name: "Jenny Wilson Started Following you.",
        time: "3.10pm",
        dot: true,
        line:true
    },
    {
        image: "2.png",
        name: "Nasuha Makusta Requested to Follow",
        time: "20 min Ago",
        dot: false,
    },
];

const worldPosition = { lat: 50, lng: 10 };

export const worldMapProps = {
    center: worldPosition,
    zoom: 2,
    maxZoom: 10,
    attributionControl: true,
    zoomControl: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    dragging: true,
    easeLinearity: 0.35,
};

export const onlineTimelineGroup = [
  { id: 1, title: "12am" },
  { id: 2, title: "1am" },
  { id: 3, title: "2am" },
  { id: 4, title: "3am" },
  { id: 5, title: "4am" },
  { id: 6, title: "5am" },
  { id: 7, title: "6am" },
  { id: 8, title: "7am" },
  { id: 9, title: "8am" },
  { id: 10, title: "9am" },
  { id: 11, title: "10am" },
  { id: 12, title: "11am" },
  { id: 13, title: "12pm" },
  { id: 14, title: "1pm" },
  { id: 15, title: "2pm" },
  { id: 16, title: "3pm" },
  { id: 17, title: "4pm" },
  { id: 18, title: "5pm" },
  { id: 19, title: "6pm" },
  { id: 20, title: "7pm" },
  { id: 21, title: "8pm" },
  { id: 22, title: "9pm" },
  { id: 23, title: "10pm" },
  { id: 24, title: "11pm" },
];

export const onlineTimelineItems = [
  {
    id: 1,
    group: 1,
    title: "NFT App Design",
    start_time: new Date(),
    end_time: new Date().setHours(new Date().getHours() + 1),
  },
  {
    id: 2,
    group: 2,
    title: "Pet Care Website",
    start_time: new Date().setHours(new Date().getHours() + 1),
    end_time: new Date().setHours(new Date().getHours() + 4),
  },
  {
    id: 3,
    group: 3,
    title: "Digital Marketing",
    start_time: new Date().setHours(new Date().getHours() + 2),
    end_time: new Date().setHours(new Date().getHours() + 4),
  },
  {
    id: 4,
    group: 4,
    title: "Computer Science",
    start_time: new Date().setHours(new Date().getHours() + 3),
    end_time: new Date().setHours(new Date().getHours() + 4),
  },
];
