import { ApexOptions } from 'apexcharts';

//chart
export const saleChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    }],
    chart: {
        type: 'area',
        height: 200,
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
            opacityTo: 0.1,
            stops: [0, 90, 100]
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
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 12,
            fillColor: "#003FDD",
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }],
    },
    responsive: [{
        breakpoint: 1661,
        options: {
            chart: {
                height: 140
            },
        },
    }
    ],
};

export const projectChart: ApexOptions = {
    series: [
        {
            name: 'series2',
            data: [15, 25, 20, 35, 55, 30, 20, 30, 20, 35, 25, 20, 15, 25, 20, 35, 50, 30, 20, 30, 20, 35, 25, 20],
        },
    ],
    colors: ["var(--theme-default)", "#FFA941"],
    chart: {
        height: 215,
        offsetY: 20,
        type: 'bar',
        sparkline: {
            enabled: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            distributed: true,
            columnWidth: "50%",
            barHeight: '38%',
            dataLabels: {
                position: 'top',
            },
        }
    },
    responsive: [
        {
            breakpoint: 1700,
            options: {
                chart: {
                    height: 86,
                },
            },
        },
        {
            breakpoint: 1699,
            options: {
                chart: {
                    height: 150,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 5,
                    },
                },
            },
        },
        {
            breakpoint: 376,
            options: {
                chart: {
                    height: 50,
                },
            },
        },
    ],
};

export const productChart: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [15, 14, 11, 20, 10, 15, 11],
    }],
    chart: {
        type: 'area',
        height: 200,
        offsetY: 10,
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
    responsive: [
        {
            breakpoint: 1700,
            options: {
                chart: {
                    height: 86,
                },
            },
        },
        {
            breakpoint: 1699,
            options: {
                chart: {
                    height: 135,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 5,
                    },
                },
            },
        },
        {
            breakpoint: 376,
            options: {
                chart: {
                    height: 50,
                },
            },
        },
    ],
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
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "#FF9766",
            strokeColor: "#fff",
            size: 6,
            shape: "circle"
        },
        ],
    },
};

export const revenueGrowthChartData: ApexOptions = {
    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [220, 0, 250, 0, 210, 0, 210, 0, 270, 0, 220, 0, 250, 0, 260, 0, 210, 0, 230]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [210, 170, 240, 160, 200, 170, 200, 150, 260, 170, 210, 170, 240, 160, 250, 140, 200, 140, 220, 220]
    }],
    chart: {
        height: 335,
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
            columnWidth: '100px'
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
        show: true,
        strokeDashArray: 3,
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
        categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "July", "", "Aug", "", "Sep", "", "Oct", ""],
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    yaxis: {
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
    },
    legend: {
        show: false,
    },
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Project Created' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

export const salesOverview: ApexOptions = {
    series: [{
        name: 'TEAM A',
        type: 'area',
        data: [183, 175, 170, 178, 185, 171, 177, 185, 170, 180, 175, 170]
    }, {
        name: 'TEAM B',
        type: 'line',
        data: [183, 193, 170, 182, 200, 180, 185, 178, 165, 175, 190, 190],
    }],
    chart: {
        height: 320,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: [3, 3],
        dashArray: [0, 4]

    },
    grid: {
        show: true,
        borderColor: '#000000',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 6,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 9,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        ],
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    },
    legend: {
        show: false,
    },
    colors: ["#003FDD", '#EAEAEA'],
    fill: {
        type: ['gradient', 'solid', 'gradient'],
        gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 1,
            gradientToColors: ["#003FDD", '#fff5f7', "#003FDD"],
            inverseColors: true,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 100, 100, 100],
        }
    },

    xaxis: {
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
        axisBorder: {
            show: false
        },
    },
    yaxis: {
        labels: {
            show: false
        },
    },
    responsive: [{
        breakpoint: 1440,
        options: {
            chart: {
                height: 220
            },
        },
    },
    ]
};

export var monthlyHistoryChart: ApexOptions = {
    series: [
        {
            name: "Profit",
            data: [100, 50, 25, 50, 30, 50, 70],
        },
        {
            name: "Revenue",
            data: [70, 20, 55, 45, 35, 110, 85],
        },
        {
            name: "Cash Flow",
            data: [85, 55, 100, 35, 90, 60, 80],
        },
    ],
    chart: {
        type: "bar",
        height: 380,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "30%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
        curve: "smooth",
        lineCap: "butt",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        floating: false,
        axisTicks: {
            show: false,
        },
        axisBorder: {
            color: "#C4C4C4",
        },
    },
    yaxis: {
        title: {
            text: "Dollars in thounand",
            style: {
                fontSize: "14px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
            },
        },
    },
    colors: ['#FE6A49', "#51bb25", "#003FDD"],
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100],
        },
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands";
            },
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 200,
                },
            },
        },
    ],
};

export const liveProductChart: ApexOptions = {
    chart: {
        height: 320,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 0,
    },
    series: [
        {
            name: "TEAM A",
            data: [50, 120, 90, 100, 70, 95, 40, 55, 30, 0],
        },
        {
            name: "TEAM B",
            data: [35, 60, 40, 90, 70, 110, 90, 120, 60, 0],
        },
    ],
    fill: {
        colors: ["#003FDD", "#FF9766"],
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 0.9,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: 0,
            right: -120,
            bottom: 10,
        },
    },
    colors: ["#003FDD", "#FF9766"],
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
    ],
    markers: {
        size: 0,
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
        axisBorder: {
            color: "rgba(196,196,196, 0.3)",
        },
    },
    yaxis: [
        {
            title: {
                text: "Dollars in thounand",
                style: {
                    fontSize: "14px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                    color: "#6C757D",
                },
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            },
        },
    },
};

export const turnOverChart: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 300,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
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
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: -20,
            right: -55,
            bottom: 0,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: ["#003FDD"],
    series: [
        {
            data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
        },
    ],
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
};

export const cryptoAnnotationChart: ApexOptions = {
    series: [
        {
            data: [8107, 8300, 8260, 8400, 8350, 8500, 8350]
        }

    ],
    chart: {
        height: 400,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    annotations: {
        yaxis: [
            {
                y: 8200,
                y2: 8400,
                borderColor: "#f8d62b",
                fillColor: "#f8d62b",
                opacity: 0.1,
                label: {
                    borderColor: "#f8d62b",
                    offsetX: -30,
                    style: {
                        fontSize: "10px",
                        color: "#fff",
                        background: "#f8d62b",
                    },
                    text: "Y-axis range",
                },
            },
        ],
        xaxis: [
            {
                x: new Date("15 Nov 2017").getTime(),
                strokeDashArray: 0,
                borderColor: "#003FDD",
                label: {
                    borderColor: "#003FDD",
                    offsetY: 20,
                    style: {
                        color: "#fff",
                        background: "#003FDD",
                    },
                    text: "Anno Test",
                },
            },
            {
                x: new Date("17 Nov 2017").getTime(),
                x2: new Date("18 Nov 2017").getTime(),
                fillColor: "#51bb25",
                opacity: 0.1,
                label: {
                    borderColor: "##51bb25",
                    style: {
                        fontSize: "10px",
                        color: "#fff",
                        background: "#51bb25",
                    },
                    offsetY: 20,
                    text: "X-axis range",
                },
            },
        ],
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    grid: {
        padding: {
            right: 30,
            left: 20,
        },
    },
    title: {
        text: "Line with Annotations",
        align: "left",
        style: {
            fontSize: "18px",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 500,
        },
    },
    colors: ["#FF9766"],
    labels: [
        "13 Nov 2017",
        "14 Nov 2017",
        "15 Nov 2017",
        "16 Nov 2017",
        "17 Nov 2017",
        "20 Nov 2017",
        "21 Nov 2017",
    ],
    xaxis: {
        type: "datetime",
    },
    responsive: [{
        breakpoint: 576,
        options: {
            title: {
                style: {
                    fontSize: "16px",
                },
            },
        },
    }]
};

export const cryptoCurrencyPrice: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 400,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
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
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
        ],
        tickAmount: 5,
        tickPlacement: "between",
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
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: -20,
            right: -16,
            bottom: 0,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: ["#003FDD"],
    series: [
        {
            data: [
                20, 120, 15, 100, 120, 60, 150, 70, 100, 80, 105, 20, 70, 60, 10, 12,
                10, 130, 60, 80, 40, 140, 110, 150, 30, 75, 20, 45, 15, 130, 10, 30,
                15, 110, 65, 130, 0,
            ],
        },
    ],
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 200,
                }
            }
        }
    ]
};

export var stockMarketChart: ApexOptions = {
    series: [
        {
            name: "line",
            type: "line",
            data: [
                {
                    x: new Date(1538778600000),
                    y: 6550,
                },
                {
                    x: new Date(1538782200000),
                    y: 6560,
                },
                {
                    x: new Date(1538814600000),
                    y: 6640,
                },
                {
                    x: new Date(1538884800000),
                    y: 6560,
                },
            ],
        },
        {
            name: "candle",
            type: "candlestick",
            data: [
                {
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                },
                {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11],
                },
                {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65],
                },
                {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24],
                },
                {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47],
                },
                {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31],
                },
                {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02],
                },
                {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02],
                },
                {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01],
                },
                {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02],
                },
                {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91],
                },
                {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612],
                },
                {
                    x: new Date(1538800200000),
                    y: [6612, 6615.13, 6605.09, 6612],
                },
                {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95],
                },
                {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67],
                },
                {
                    x: new Date(1538805600000),
                    y: [6618.69, 6618.74, 6610, 6610.4],
                },
                {
                    x: new Date(1538807400000),
                    y: [6611, 6622.78, 6610.4, 6614.9],
                },
                {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45],
                },
                {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35],
                },
                {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53],
                },
                {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19],
                },
                {
                    x: new Date(1538816400000),
                    y: [6615.19, 6621.6, 6608.2, 6620],
                },
                {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620],
                },
                {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61],
                },
                {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58],
                },
                {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86],
                },
                {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16],
                },
                {
                    x: new Date(1538827200000),
                    y: [6588.86, 6600, 6580, 6593.4],
                },
                {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81],
                },
                {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578],
                },
                {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579],
                },
                {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96],
                },
                {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92],
                },
                {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22],
                },
                {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08],
                },
                {
                    x: new Date(1538841600000),
                    y: [6597.5, 6600, 6588.39, 6596.25],
                },
                {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97],
                },
                {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602],
                },
                {
                    x: new Date(1538847000000),
                    y: [6602, 6607, 6596.51, 6599.95],
                },
                {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02],
                },
                {
                    x: new Date(1538850600000),
                    y: [6591.02, 6603.08, 6591, 6591],
                },
                {
                    x: new Date(1538852400000),
                    y: [6591, 6601.32, 6585, 6592],
                },
                {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34],
                },
                {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86],
                },
                {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01],
                },
                {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25],
                },
                {
                    x: new Date(1538861400000),
                    y: [6596.25, 6604.2, 6590, 6602.99],
                },
                {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81],
                },
                {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96],
                },
                {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39],
                },
                {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27],
                },
                {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55],
                },
                {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02],
                },
                {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01],
                },
                {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06],
                },
                {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89],
                },
                {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5],
                },
                {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86],
                },
                {
                    x: new Date(1538883000000),
                    y: [6603.85, 6605, 6600, 6604.07],
                },
                {
                    x: new Date(1538884800000),
                    y: [6604.98, 6606, 6604.07, 6606],
                },
            ],
        },
    ],
    plotOptions: {
        candlestick: {
            colors: {
                upward: "#003FDD",
                downward: "#FF9766"
            }
        }
    },
    legend: {
        show: false,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.2,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
        }
    },
    chart: {
        height: 450,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: [1, 1],
    },
    tooltip: {
        shared: true,
        custom: [
            function ({ seriesIndex, dataPointIndex, w }) {
                return w.globals.series[seriesIndex][dataPointIndex];
            },
            function ({ seriesIndex, dataPointIndex, w }) {
                var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
                var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
                var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
                var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
                return "";
            },
        ],
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    grid: {
        strokeDashArray: 3,
        position: 'back',
        row: {
            opacity: 0.5
        },
        column: {
            opacity: 0.5
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 250,
                }
            }
        }
    ]
};

var trigoStrength = 3;
function generateMinuteWiseTimeSeries(baseval: number, count: number, yrange: { min: number; max: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y =
            (Math.sin(i / trigoStrength) * (i / trigoStrength) +
                i / trigoStrength +
                1) *
            (trigoStrength * 2);

        series.push([x, y]);
        baseval += 300000;
        i++;
    }
    return series;
}

export const financeChart: ApexOptions = {
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 0,
    },
    series: [
        {
            name: "Load Average",
            type: 'column',
            data: generateMinuteWiseTimeSeries(
                new Date("12/12/2016 00:20:00").getTime(),
                12,
                {
                    min: 10,
                    max: 110,
                }
            ),
        },
        {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
    ],

    title: {
        text: "Average",
        align: "left",
        style: {
            fontSize: "12px",
        },
    },
    subtitle: {
        text: "17%",
        floating: true,
        align: "right",
        offsetY: 0,
        style: {
            fontSize: "20px",
            fontWeight: 500,
        },
    },
    fill: {
        colors: ["#003FDD"],
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    xaxis: {
        type: "datetime",
        range: 2700000,
    },
    yaxis: {
        decimalsInFloat: 1,
    },
    legend: {
        show: true,
        labels: {
            colors: "#003FDD",
        },
    },
    responsive: [{
        breakpoint: 1366,
        options: {
            subtitle: {
                style: {
                    fontSize: "18px",
                },
            },
        },
    },
    {
        breakpoint: 992,
        options: {
            subtitle: {
                style: {
                    fontSize: "16px",
                },
            },
        },
    }
    ]
};

export var orderStatusChart: ApexOptions = {
    chart: {
        height: 350,
        type: "line",
        stacked: true,
        animations: {
            enabled: true,
            dynamicAnimation: {
                speed: 1000,
            },
        },
        events: {
            animationEnd: function (chartCtx) {
                const newData1 = chartCtx.w.config.series[0].data.slice();
                newData1.shift();
                const newData2 = chartCtx.w.config.series[1].data.slice();
                newData2.shift();
                window.setTimeout(function () {
                    chartCtx.updateOptions(
                        {
                            series: [
                                {
                                    data: newData1,
                                },
                                {
                                    data: newData2,
                                },
                            ],

                        },
                        false,
                        false
                    );
                }, 300);
            },
        },
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
        width: 5,
    },
    grid: {
        padding: {
            left: 0,
            right: 0,
        },
    },
    fill: {
        opacity: 0.9,
    },
    colors: ["#003FDD", "#FF9766"],
    markers: {
        size: 0,
        hover: {
            size: 0,
        },
    },
    series: [
        {
            name: "Running",
            data: generateMinuteWiseTimeSeries(
                new Date("12/12/2016 00:20:00").getTime(),
                12,
                {
                    min: 30,
                    max: 110,
                }
            ),
        },
        {
            name: "Waiting",
            data: generateMinuteWiseTimeSeries(
                new Date("12/12/2016 00:20:00").getTime(),
                12,
                {
                    min: 30,
                    max: 110,
                }
            ),
        },
    ],
    xaxis: {
        type: "datetime",
        range: 2700000,
    },
    yaxis: {
        decimalsInFloat: 1,
    },
    title: {
        text: "Processes",
        align: "left",
        style: {
            fontSize: "12px",
        },
    },
    legend: {
        show: true,
        floating: true,
        horizontalAlign: "right",
        onItemClick: {
            toggleDataSeries: false,
        },
        position: "top",
        offsetY: -33,
        offsetX: 60,
    },
    responsive: [{
        breakpoint: 1366,
        options: {
            title: {
                style: {
                    fontSize: "18px",
                },
            },
        },
    },
    {
        breakpoint: 992,
        options: {
            title: {
                style: {
                    fontSize: "16px",
                },
            },
        },
    }
    ]
};

export var monthlySalesChart: ApexOptions = {
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "Reflected",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    colors: ["#003FDD", "#FF9766"],
    chart: {
        height: 300,
        type: "radar",
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
        },
    },
    series: [
        {
            name: "Series 1",
            data: [80, 50, 30, 40, 100, 20],
        },
        {
            name: "Series 2",
            data: [20, 30, 40, 80, 20, 80],
        },
    ],
    title: {
        text: "Radar Chart - Multi Series",
    },
    stroke: {
        width: 0,
    },
    markers: {
        size: 0,
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};

function generateData(baseval: number, count: number, yrange: { min: number; max: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}
export const usesChart: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 320,
        type: "bubble",
    },
    dataLabels: {
        enabled: false,
    },
    series: [
        {
            name: "Bubble1",
            data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
        {
            name: "Bubble2",
            data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
        {
            name: "Bubble3",
            data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
        {
            name: "Bubble4",
            data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
    ],
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.7,
            stops: [0, 100],
        },
    },
    colors: [
        "#003FDD",
        "#FF9766",
        "#51bb25",
        "#544fff",
    ],
    title: {
        text: "Simple Bubble Chart",
    },
    xaxis: {
        tickAmount: 12,
        type: "category",
    },
    yaxis: {
        max: 70,
    },
};

//data
export const saleChartData = [
    {
        title: "Total Sale",
        amount: "$3654.00",
        description: "Compare to last month",
        percentage: "+65%",
        chart: saleChart
    },
    {
        title: "Total Project",
        amount: "12569",
        description: "Compare to last month",
        percentage: "+65%",
        chart: projectChart
    },
    {
        title: "Total Product",
        amount: "93M",
        description: "Compare to last month",
        percentage: "+65%",
        chart: productChart
    }
]