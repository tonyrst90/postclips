import { ApexOptions } from "apexcharts";

//chart
export const topCategoriesChartData: ApexOptions = {
    series: [80, 55, 44],
    chart: {
        type: 'donut',
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            donut: {
                size: "75%",
                labels: {
                    show: true,
                    name: {
                        offsetY: -10,
                    },
                    value: {
                        offsetY: -50,
                    },
                    total: {
                        show: true,
                        fontSize: "18px",
                        fontFamily: "Outfit",
                        fontWeight: 500,
                        label: "Product Sales",
                        color: "#959595",
                        formatter: (w) => "14,937",
                    },
                },
            },
            customScale: 1,
            offsetX: 0,
        },
    },
    grid: {
        padding: {
            bottom: -120
        }
    },
    colors: ["#003FDD", "#FF9766", "#61AE41"],
    responsive: [
        {
            breakpoint: 1800,
            options: {
                chart: {
                    height: 392,
                },
            },
        },
        {
            breakpoint: 1601,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
        {
            breakpoint: 1401,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
};

export const productSalesChartData: ApexOptions = {
    series: [
        {
            name: "Product Sales",
            data: [
                5, 15, 65, 40, 39, 50, 35, 38, 47, 40, 90, 58, 65, 70, 75, 70, 67, 30,
                69, 65, 75, 72, 65, 72, 95, 50, 45, 57, 54, 48, 53, 60, 25, 30,
            ],
        },
    ],
    chart: {
        height: 270,
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
        curve: "straight",
        width: 3,
    },
    colors: ["#003FDD"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.2,
            stops: [0, 100, 100],
        },
    },
    grid: {
        row: {
            colors: ["transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
        },
    },
    xaxis: {
        categories: [' ', ' ', '12:00', ' ', ' ', ' ', '', ' ', '15:00', ' ', ' ', ' ', ' ', ' ', '18:00', ' ', ' ', ' ', ' ', ' ', '21:00', ' ', ' ', ' ', ' ', ' ', '03:00', ' ', ' ', ' ', ' ', ' ', '04:00', ' ', ' '],
        labels: {
            style: {
                fontSize: "13px",
                colors: "#959595",
                fontFamily: "Lexend, sans-serif",
            },
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            style: {
                fontSize: "14px",
                colors: "#161616",
                fontWeight: "500",
                fontFamily: "Lexend, sans-serif",
            },
        },
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex }) {
            return (
                '<div class="apex-tooltip p-2">' +
                "<span>" +
                '<span class="bg-primary">' +
                "</span>" +
                "Product Sales" +
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

export const reportChartData: ApexOptions = {
    chart: {
        height: 285,
        type: "bar",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "55%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
    },
    series: [
        {
            name: "Sales Account",
            data: [162, 85, 26, 101, 185, 108, 157, 58, 26, 101, 102, 101],
        },
        {
            name: "General Leads",
            data: [117, 117, 83, 139, 56, 85, 117, 117, 83, 139, 56, 139],
        },
        {
            name: "Churn Rate",
            data: [31, 56, 164, 85, 128, 31, 31, 56, 164, 85, 128, 85],
        },
    ],
    xaxis: {
        categories: [
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
            "Dec",
        ],
        axisBorder: {
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
        show: false,
    },
    legend: {
        show: false,
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            },
        },
    },
    colors: ["#003FDD", "#FF9766", "#51bb25"],
};

//data

export const stockReportData = [
    {
        amount: "$625,083",
        svgIcon: "arrow-chart-up",
        color: "success",
        percentage: "+34%",
        title: "Sales Account",
    },
    {
        amount: "36,900",
        svgIcon: "arrow-chart",
        color: "danger",
        percentage: "-14%",
        title: "General Leads",
    },
    {
        amount: "4,5%",
        svgIcon: "arrow-chart-up",
        color: "success",
        percentage: "+30%",
        title: "Churn Rate",
    },
    {
        amount: "8,640",
        svgIcon: "arrow-chart-up",
        color: "success",
        percentage: "+34%",
        title: "Returning Uses",
    },
];

export const topCategoriesDetailsData = [
    {
        color: "primary",
        percentage: "75%",
        title: "Electronics"
    },
    {
        color: "secondary",
        percentage: "46.8%",
        title: "Fashion Trends"
    },
    {
        color: "success",
        percentage: "17.8%",
        title: "Entertainment"
    }
]

export const manageOrderHead = ['Products name', 'ID', 'Date', 'Price', 'Status', 'Quantity']

export const manageOrderTableBodyData = [
    {
        image: "8.png",
        productName: "MacBook Pro",
        id: "36294",
        date: "15/08/23",
        price: "524",
        status: "In Stock",
        color: "primary",
        quantity: "15"
    },
    {
        image: "9.png",
        productName: "Mai Phone 12 Pro",
        id: "65448",
        date: "13/08/23",
        price: "450",
        status: "Low Stock",
        color: "success",
        quantity: "06"
    },
    {
        image: "10.png",
        productName: "Apple Watch",
        id: "35448",
        date: "15/08/23",
        price: "500",
        status: "In Stock",
        color: "primary",
        quantity: "20"
    },
    {
        image: "11.png",
        productName: "Apple Headphone",
        id: "95421",
        date: "10/08/23",
        price: "200",
        status: "Out of Stock",
        color: "danger",
        quantity: "12"
    }
]

export const trackOrderStatusData = [
    {
        image: "4.png",
        title: "Order Placed",
        detail: "We have received Your Order",
        date: "Jun20 05:40PM",
        color: "primary"
    },
    {
        image: "5.png",
        title: "Order Packed",
        detail: "Your Product Packed and ready to shipped",
        date: "Jun20 06:30PM",
        color: "secondary"
    },
    {
        image: "6.png",
        title: "On the way",
        detail: "Your Ordeis placed successfully.",
        date: "July 20",
    },
    {
        image: "7.png",
        title: "Product Deliverd",
        detail: "Our courier partner will deliver our stuff on July 3, 2024...",
    }
]

//chart
export const earningChartData: ApexOptions = {
    series: [
        {
            name: "Revenue",
            data: [92, 64, 43, 80, 58, 92, 46, 76, 80],
        },
        {
            name: "Revenue",
            data: [20, 48, 69, 32, 54, 20, 66, 36, 32],
        },
    ],
    chart: {
        type: "bar",
        offsetY: 30,
        toolbar: {
            show: false,
        },
        height: 100,
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
            columnWidth: "55%",
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
        colors: ["#dedffc", "#003FDD"],
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
                "Revenue" +
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

export const salesChartData: ApexOptions = {
    series: [{
        name: "Sales",
        data: [15, 25, 20, 35, 16, 18, 10, 22, 18, 25, 17],
    }],
    chart: {
        type: 'area',
        height: 100,
        offsetY: 50,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 2,
            color: "#FF9766",
            opacity: 0.2,
        },
    },
    colors: ["#FF9766"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false
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
        curve: 'smooth',
        width: 2,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Sales' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

export const totalCustomerChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [10, 35, 15, 78, 40, 60, 12, 60],
    }],
    chart: {
        type: 'area',
        height: 100,
        offsetY: 30,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 2,
            color: '#61AE41',
            opacity: 0.2,
        },
    },
    colors: ['#61AE41'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false
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
        curve: 'straight',
        width: 2,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'customer' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

export const totalProductChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [10, 35, 15, 78, 40, 60, 12, 60],
    }],
    chart: {
        type: 'area',
        height: 100,
        offsetY: 30,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 0.1,
            left: 0,
            blur: 2,
            color: '#61AE41',
            opacity: 0.2,
        },
    },
    colors: ['#44A8D7'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100],
        },
        colors:['#44A8D7']
    },
    dataLabels: {
        enabled: false
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
        curve: 'straight',
        width: 2,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'customer' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

export const dailyVisitorsChartData: ApexOptions = {
    chart: {
        height: 200,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'series1',
        data: [0, 40, 25, 80, 35, 40, 38, 50, 35, 70, 50, 100, 0]
    }, {
        name: 'series2',
        data: [5, 50, 70, 55, 78, 45, 100, 80, 85, 60, 35, 80, 0]
    }],
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "jan"],
        labels: {
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
    yaxis: {
        labels: {
            formatter: function (val) {
                return "$" + val + "k";
            },
            style: {
                fontSize: "14px",
                colors: "$black",
                fontWeight: 500,
                fontFamily: "Lexend, sans-serif",
            },
        },
    },
    grid: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    legend: {
        show: false,
    },
    fill: {
        colors: ["#003FDD", "#FF9766"],
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.3,
            stops: [0, 90, 100]
        },
    },
    colors: ["#003FDD", "#FF9766"],
}

//data
export const dailyVisitorsOrderData = [
    {
        color: "primary",
        class: "me-3",
        title: "Deals",
        count: "350",
    },
    {
        color: "secondary",
        title: "Order Price",
        count: "$31K",
    },
];

export const orderProgressData = [
    {
        title: "Visits",
        count: "20,200",
        color: "primary",
        value: "70",
    },
    {
        title: "Order Value",
        count: "15,610",
        color: "secondary",
        value: "70",
    },
];

export const topProductBodyData = [
    {
        image: "1.png",
        status: "Hot",
        productName: "Women's Yellow top",
        amount: "$26.00",
        mainAmount: "$30.00",
        color: "primary",
    },
    {
        image: "2.png",
        productName: "Full Sleeve Men Jacket",
        amount: "$14.00",
        mainAmount: "$15.00",
    },
    {
        image: "3.png",
        status: "50%",
        color: "secondary",
        productName: "Full Sleeve Men Jacket",
        amount: "$30.00",
        mainAmount: "$35.00",
    },
];

export const totalRevenueData = [
    {
        icon: "Revenue",
        amount: "$73,927",
        title: "Total Revenue",
        arrowIcon: "arrow-chart-up",
        percentage: "+34%",
        chart: earningChartData,
        chartClass: "earning"
    },
    {
        icon: "Sales",
        amount: "24 million",
        title: "Total Views",
        arrowIcon: "arrow-chart",
        percentage: "-14%",
        chart: salesChartData,
        divClass: "up-sales",
        chartClass: "sales"
    },
    {
        icon: "Customer",
        amount: "62,828",
        title: "Total Interactions",
        arrowIcon: "arrow-chart",
        percentage: "-24%",
        chart: totalCustomerChart,
        divClass: "total-customer",
        chartClass: "customer"
    },
    {
        icon: "Product",
        amount: "72,982",
        title: "Total X",
        arrowIcon: "arrow-chart-up",
        percentage: "+42%",
        chart: totalProductChart,
        divClass: "total-product",
        chartClass: "total-product"
    }
]

export const totalRevenueData2 = [
    {
      icon:"Revenue",
      amount:"$73,927",
      title:"Total Revenue",
      arrowIcon:"arrow-chart-up",
      percentage:"+34%",
      chart:earningChartData,
      chartClass:"earning-chart",
      id:"earning-chart"
    },
    {
      icon:"Sales",
      amount:"24k USD",
      title:"Total Sales",
      arrowIcon:"arrow-chart",
      percentage:"-14%",
      chart:salesChartData,
      classExtra:"up-sales",
      chartClass:"sales-chart",
      id:"sales-chart"
    },
    {
      icon:"Customer",
      amount:"62,828",
      title:"Total Customer",
      arrowIcon:"arrow-chart",
      percentage:"-24%",
      chart:totalCustomerChart,
      classExtra:"total-customer",
      chartClass:"customer-chart",
      id:"total-customer-chart"
    },
    {
      icon:"Product",
      amount:"72,982",
      title:"Total Product",
      arrowIcon:"arrow-chart-up",
      percentage:"+42%",
      chart:totalProductChart,
      classExtra:"total-product",
      chartClass:"total-product-chart"
    }
  ]

export const openInvoiceHead = ['Invoice', 'Customer', 'Status', 'Amount', 'Due Date', '']

export const openInvoicesTableBodyData = [
    {
        invoiceNo: "FV 00002/04/2024",
        image: "1.png",
        name: "Lena smith",
        email: "lena.smith@gmail.com",
        color: "primary",
        status: "Paid",
        amount: "$8,892.00",
        date: "Feb 20,2024"
    },
    {
        invoiceNo: "FV 00008/07/2024",
        image: "2.png",
        name: "Aliah Lain",
        email: "aliah.lain@gmail.com",
        color: "secondary",
        status: "Unpaid",
        amount: "$4,942.00",
        date: "Feb 14,2024"
    },
    {
        invoiceNo: "FV 00007/09/2024",
        image: "3.png",
        name: "Nicol Green",
        email: "nicol.green@gmail.com",
        color: "primary",
        status: "Paid",
        amount: "$3,753.00",
        date: "Feb 10,2024"
    },
    {
        invoiceNo: "FV 00009/04/2024",
        image: "4.png",
        name: "Paul Miller",
        email: "paul.miller@gmail.com",
        color: "danger",
        status: "Overdue",
        amount: "$2,852.00",
        date: "Feb 20,2024"
    }
]