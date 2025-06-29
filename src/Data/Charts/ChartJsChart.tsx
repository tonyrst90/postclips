import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Filler, LineElement, Title, Tooltip, Legend, BarController, BarElement, ArcElement, RadialLinearScale, Colors } from "chart.js";

ChartJS.register(
    CategoryScale, LinearScale, PointElement, Filler, LineElement, Colors, Title, Tooltip, Legend, BarController, BarElement, ArcElement, RadialLinearScale
);

const primary = "#003FDD";
const secondary = "#FF9766";


export const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            data: [35, 59, 80, 81, 56, 55, 40],
            borderColor: primary,
            backgroundColor: "rgba(92, 97 ,242, 0.4)",
            highlightFill: "rgba(92, 97 ,242, 0.6)",
            highlightStroke: primary,
            borderWidth: 2,
        },
        {
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: secondary,
            backgroundColor: "rgba(255, 151, 102, 0.4)",
            highlightFill: "rgba(255, 151, 102, 0.6)",
            highlightStroke: secondary,
            borderWidth: 2,
        },
    ],
    plugins: {
        datalabels: {
            display: false,
            color: "white",
        },
    },
};

export const barChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        datalabels: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
};

export const lineGraphData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        fill: true,
        label: "My First dataset",
        data: [10, 59, 80, 81, 56, 55, 40], 
        borderColor: primary,
        backgroundColor: "rgba(92, 97 ,242, 0.2)",
        borderWidth: 2,
    }, {
        fill: true,
        data: [28, 48, 40, 19, 86, 27, 90], 
        label: "My Second dataset",
        borderColor: secondary,
        backgroundColor:"rgba(255, 151, 102, 0.3)",
        borderWidth: 2,
    }]
}

export const lineGraphOptions = {
    scales: {
        x: {
            grid: {
                display: true,
                color: 'rgba(0,0,0,.05)',
                lineWidth: 1,
            },
            display: true,
        },
        y: {
            grid: {
                display: true,
                color: 'rgba(0,0,0,.05)',
                lineWidth: 1,
            },
            display: true,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
    elements: {
        point: {
            radius: 4,
            borderWidth: 1,
            hoverRadius: 20,
        },
        line: {
            tension: 0.4,
        },
    },
}

export const radarGraphData = {
    labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
    datasets: [{
        label: "My First Dataset",
        data: [12, 3, 5, 18, 7],
        fill: true,
        backgroundColor: "rgba(92, 97 ,242, 0.4)",
        borderColor: primary,
        borderWidth: 1,
        pointColor: primary,
    }]
};

export const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        line: {
            borderWidth: 2,
        },
    },
    plugins: {
        datalabels: {
            display: false,
        },
        legend: {
            display: false,
        },
    },
};

export const lineChartData = {
    labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
    datasets: [
        {
            backgroundColor: "rgba(81, 187, 37, 0.2)",
            borderColor: "#51bb25",
            pointColor: "#51bb25",
            data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
            fill: {
                target: "origin",
                above: "rgba(81, 187, 37, 0.2)"
            }
        },
        {
            backgroundColor: "rgba(255, 151, 102, 0.2)",
            borderColor: secondary,
            pointColor: secondary,
            data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
            fill: {
                target: "origin",
                above: "rgba(255, 151, 102, 0.2)"
            }
        },
        {
            backgroundColor: "rgba(92, 97 ,242, 0.2)",
            borderColor: primary,
            pointColor: primary,
            data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
            fill: {
                target: "origin",
                above: "rgba(92, 97 ,242, 0.2)"
            }
        },
    ],
};

export const lineChartOption = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
        duration: 0,
    },
    scaleShowVerticalLines: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white',
        },
        legend: {
            display: false,
        },
    },
};

export const doughnutData = {
    labels: ['Primary', 'Secondary', 'Success'],
    datasets: [
        {
            data: [350, 50, 100],
            backgroundColor: [primary, secondary, "#51bb25"],
        },
    ],
};

export const doughnutOption = {
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white',
        },
        legend: {
            display: false,
        },
    },
};

export const polarData = {
    labels: ['Yellow', 'Sky', 'Black', 'Grey', 'Dark Grey'],
    datasets: [
        {
            data: [300, 500, 100, 40, 120],
            backgroundColor: [primary, "#f8d62b", "#51bb25", "#a927f9", secondary],
        },
    ],
};

export const polarOption = {
    maintainAspectRatio: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white',
        },
        legend: {
            display: false,
        },
    },
};