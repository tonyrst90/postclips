import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { TableColumn } from "react-data-table-component";
import { CustomRowCreateInterFace, RowCreateCallBackData, StockResultColumnType } from "@/Types/Tables.type";

export const stockResultSubTitle = [
    {
        text: "Data within DataTables can be easily rendered to add graphics or colour to your tables, as demonstrated in the example on this page. These examples make use of columns.render and drawCallback to customise the cells in three ways:"
    },
    {
        text: "1. the colour of the cell is determine by the relative price of the stock."
    },
    {
        text: "2. a 'sparkline' class is added to the numeric array in the 'last' column."
    },
    {
        text: "3. the jQuery Sparklines plugin is called to turn that array into a line graph."
    }
]

export const rowCreateCallBackSubTitle = [
    {
        text: "For each row that is generated for display, the createdRow function is called once and once only. It is passed the create row node which can then be modified."
    },
    {
        text: "the 'salary' column Primary and bold by adding a CSS class to the container cell if the salary is greater than $150,000."
    },
    {
        text: "the 'salary' column danger and bold by adding a CSS class to the container cell if the salary is less than $40,000."
    }
]

const areaSpaLine: ApexOptions = {
    series: [
        {
            name: "ACME Gadgets",
            data: [2.57, 2.54, 2.54, 2.56, 2.57, 2.58, 2.59],
        },
    ],
    chart: {
        height: 85,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    yaxis: {
        show: false,
    },
    grid: {
        yaxis: {
            lines: {
                show: false, //or just here to disable only x axis grids
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        labels: {
            show: false,
        },

        type: "datetime",
        categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-19T01:30:00.000Z",
            "2022-09-19T02:30:00.000Z",
            "2022-09-19T03:30:00.000Z",
            "2022-09-19T04:30:00.000Z",
            "2022-09-19T05:30:00.000Z",
            "2022-09-19T06:30:00.000Z",
        ],
    },
    responsive: [
        {
            breakpoint: 360,
            options: {
                chart: {
                    offsetX: -10,
                    offsetY: 10,
                },
            },
        },
    ],
    colors: ["#003FDD", "#003FDD"],
};

const areaSpaLine2: ApexOptions = {
    series: [
        {
            name: "Spry Media Productions",
            data: [1.12, 1.11, 1.08, 1.08, 1.09, 1.11, 1.08],
        },
    ],
    chart: {
        height: 85,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    yaxis: {
        show: false,
    },
    grid: {
        yaxis: {
            lines: {
                show: false, //or just here to disable only x axis grids
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        labels: {
            show: false,
        },

        type: "datetime",
        categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-19T01:30:00.000Z",
            "2022-09-19T02:30:00.000Z",
            "2022-09-19T03:30:00.000Z",
            "2022-09-19T04:30:00.000Z",
            "2022-09-19T05:30:00.000Z",
            "2022-09-19T06:30:00.000Z",
        ],
    },
    responsive: [
        {
            breakpoint: 360,
            options: {
                chart: {
                    offsetX: -10,
                    offsetY: 10,
                },
            },
        },
    ],
    colors: ["#003FDD", "#003FDD"],
};

const areaSpaLine3: ApexOptions = {
    series: [
        {
            name: "Widget Emporium",
            data: [3.4, 3.39, 3.46, 3.51, 3.5, 3.48, 3.49],
        },
    ],
    chart: {
        height: 85,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    yaxis: {
        show: false,
    },
    grid: {
        yaxis: {
            lines: {
                show: false, //or just here to disable only x axis grids
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        labels: {
            show: false,
        },

        type: "datetime",
        categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-19T01:30:00.000Z",
            "2022-09-19T02:30:00.000Z",
            "2022-09-19T03:30:00.000Z",
            "2022-09-19T04:30:00.000Z",
            "2022-09-19T05:30:00.000Z",
            "2022-09-19T06:30:00.000Z",
        ],
    },
    responsive: [
        {
            breakpoint: 360,
            options: {
                chart: {
                    offsetX: -10,
                    offsetY: 10,
                },
            },
        },
    ],
    colors: ["#003FDD", "#003FDD"],
};

const areaSpaLine4: ApexOptions = {
    series: [
        {
            name: "Sole Goodman",
            data: [16.2, 16.4, 16.36, 16.35, 16.61, 16.46, 16.19],
        },
    ],
    chart: {
        height: 85,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    yaxis: {
        show: false,
    },
    grid: {
        yaxis: {
            lines: {
                show: false, //or just here to disable only x axis grids
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        labels: {
            show: false,
        },

        type: "datetime",
        categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-19T01:30:00.000Z",
            "2022-09-19T02:30:00.000Z",
            "2022-09-19T03:30:00.000Z",
            "2022-09-19T04:30:00.000Z",
            "2022-09-19T05:30:00.000Z",
            "2022-09-19T06:30:00.000Z",
        ],
    },
    responsive: [
        {
            breakpoint: 360,
            options: {
                chart: {
                    offsetX: -10,
                    offsetY: 10,
                },
            },
        },
    ],
    colors: ["#003FDD", "#003FDD"],
};

const areaSpaLine5: ApexOptions = {
    series: [
        {
            name: "Stanler Bits and Bobs",
            data: [82.51, 83.47, 83.4, 83.68, 83.81, 83.29, 83.72],
        },
    ],
    chart: {
        height: 85,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
    },
    yaxis: {
        show: false,
    },
    grid: {
        yaxis: {
            lines: {
                show: false, //or just here to disable only x axis grids
            },
        },
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    xaxis: {
        labels: {
            show: false,
        },

        type: "datetime",
        categories: [
            "2022-09-19T00:00:00.000Z",
            "2022-09-19T01:30:00.000Z",
            "2022-09-19T02:30:00.000Z",
            "2022-09-19T03:30:00.000Z",
            "2022-09-19T04:30:00.000Z",
            "2022-09-19T05:30:00.000Z",
            "2022-09-19T06:30:00.000Z",
        ],
    },
    responsive: [
        {
            breakpoint: 360,
            options: {
                chart: {
                    offsetX: -10,
                    offsetY: 10,
                },
            },
        },
    ],
    colors: ["#003FDD", "#003FDD"],
};


export const stockResultTableData: StockResultColumnType[] = [
    {
        id: 1,
        name: "ACME Gadgets",
        symbol: "AGDTS",
        price: "2.57",
        difference: <span style={{ color: "green" }}>0.02</span>,
        last: (
            <ReactApexChart
                options={areaSpaLine}
                series={areaSpaLine.series}
                height="85"
                type="area"
            />
        ),
    },
    {
        id: 2,
        name: "Sole Goodman",
        symbol: "SGMAN",
        price: "16.61",
        difference: <span style={{ color: "green" }}>0.26</span>,
        last: (
            <ReactApexChart
                options={areaSpaLine2}
                series={areaSpaLine2.series}
                height="85"
                type="area"
            />
        ),
    },
    {
        id: 3,
        name: "Spry Media Productions",
        symbol: "SPMP",
        price: "1.09",
        difference: <span style={{ color: "green" }}>0.01</span>,
        last: (
            <ReactApexChart
                options={areaSpaLine3}
                series={areaSpaLine3.series}
                height="85"
                type="area"
            />
        ),
    },
    {
        id: 4,
        name: "Stanler Bits and Bobs",
        symbol: "SBIBO",
        price: "83.81",
        difference: <span style={{ color: "green" }}>0.13</span>,
        last: (
            <ReactApexChart
                options={areaSpaLine4}
                series={areaSpaLine4.series}
                height="85"
                type="area"
            />
        ),
    },
    {
        id: 5,
        name: "Widget Emporium",
        symbol: "WDEMP",
        price: "3.50",
        difference: <span style={{ color: "red" }}>-0.01</span>,
        last: (
            <ReactApexChart
                options={areaSpaLine5}
                series={areaSpaLine5.series}
                height="85"
                type="area"
            />
        ),
    },
];

export const stockResultTableColumns: TableColumn<StockResultColumnType>[] = [
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        center: false,
    },
    {
        name: "Symbol",
        selector: (row) => `${row.symbol}`,
        sortable: true,
        center: false,
    },
    {
        name: "Price",
        selector: (row) => `${row.price}`,
        sortable: true,
        center: false,
    },
    {
        name: "Difference",
        cell: (row) => row.difference,
        sortable: true,
        center: false,
    },
    {
        name: "Last",
        cell: (row) => row.last,
        sortable: true,
        center: false,
    },
];

export const rowCreateCallBackTableData: RowCreateCallBackData[] = [
    {
        id: 1,
        name: "Angelica Ramos",
        email: "Angelica@gmail.com",
        experience: "4 Month",
        sex: "Female",
        contactNumber: "+91 8745963210",
        salary: "1200000",
    },
    {
        id: 2,
        name: "Bradley Greer",
        email: "Bradley@gmail.com",
        experience: "6 Year",
        sex: "Male",
        contactNumber: "+91 8794561230",
        salary: "132000",
    },
    {
        id: 3,
        name: "Brenden Wagner",
        email: "Brenden@gmail.com",
        experience: "2 Year",
        sex: "Female",
        contactNumber: "+91 6589742301",
        salary: "132000",
    },
    {
        id: 4,
        name: "Caesar Vance",
        email: "Vance@yahoo.com",
        experience: "1 Year",
        sex: "Male",
        contactNumber: "+91 8596741230",
        salary: "206850",
    },
    {
        id: 5,
        name: "Dai Rios",
        email: "Rios@gmail.com",
        experience: "1 Year",
        sex: "Male",
        contactNumber: "+91 7418529630",
        salary: "217500",
    },
    {
        id: 6,
        name: "Doris Wilder",
        email: "Wilder@gmail.com",
        experience: "6 Month",
        sex: "Male",
        contactNumber: "+91 6541239870",
        salary: "85600",
    },
    {
        id: 7,
        name: "Elana Robbert	",
        email: "ElanaRob@gmail.com	",
        experience: "1 Year	",
        sex: "Male	",
        contactNumber: "+91 9789887777",
        salary: "28000",
    },
    {
        id: 8,
        name: "Fiona Green",
        email: "Fiona@yahoo.com",
        experience: "3 Month",
        sex: "Female",
        contactNumber: "+91 6985321470",
        salary: "850000",
    },
    {
        id: 9,
        name: "Gavin Cortez",
        email: "Gavin@gmail.com",
        experience: "9 Year",
        sex: "Male",
        contactNumber: "+91 748521369",
        salary: "232500",
    },
    {
        id: 10,
        name: "Gavin Joyce",
        email: "Gavin@yahoo.com",
        experience: "8 Month",
        sex: "Male",
        contactNumber: "+91 8596741230",
        salary: "235500",
    },
    {
        id: 11,
        name: "Genelia Ottre	",
        email: "Genelia@gmail.com",
        experience: "2 Days",
        sex: "Male",
        contactNumber: "+91 8794562135",
        salary: "92575",
    },
    {
        id: 12,
        name: "Gloria Little",
        email: "Gloria@yahoo.com",
        experience: "4 Year",
        sex: "Male",
        contactNumber: "+91 9876541230",
        salary: "24120",
    },
    {
        id: 13,
        name: "Jenette Caldwell",
        email: "Jenette@yahoo.com",
        experience: "2 Year",
        sex: "Female",
        contactNumber: "+91 4569871230",
        salary: "237500",
    },
    {
        id: 14,
        name: "Jennifer Chang",
        email: "Jennifer@yahoo.com",
        experience: "1 Year",
        sex: "Female",
        contactNumber: "+91 7412589630",
        salary: "345000",
    },
    {
        id: 15,
        name: "Michael Silva",
        email: "Michael@yahoo.com",
        experience: "3 Year",
        sex: "Female",
        contactNumber: "+91 1234567891",
        salary: "357650",
    },
    {
        id: 16,
        name: "Michelle House",
        email: "Michelle@gmail.com",
        experience: "1 Year",
        sex: "Male",
        contactNumber: "+91 8745961235",
        salary: "198500",
    },
    {
        id: 17,
        name: "Paul Byrd",
        email: "Paul@gmail.com",
        experience: "2 Day",
        sex: "Male",
        contactNumber: "+91 3124567894",
        salary: "95400",
    },
    {
        id: 18,
        name: "Prescott Bartlett",
        email: "Prescott@gmail.com",
        experience: "8 Year",
        sex: "Male",
        contactNumber: "+91 4578961231",
        salary: "725000",
    },
    {
        id: 19,
        name: "Shou Itou",
        email: "Shou@gmail.com",
        experience: "2 Year",
        sex: "Female",
        contactNumber: "+91 3256897414",
        salary: "145000",
    },
    {
        id: 20,
        name: "Stiphen Deo",
        email: "Stiphen@yahoo.com",
        experience: "6 Month",
        sex: "Female",
        contactNumber: "+91 9874563210",
        salary: "163000",
    },
    {
        id: 21,
        name: "Suki Burks",
        email: "Burks@gmail.com",
        experience: "3 Year",
        sex: "Female",
        contactNumber: "+91 4785961230",
        salary: "22000",
    },
    {
        id: 22,
        name: "Yuri Berry",
        email: "Berry@gmail.com",
        experience: "3 Year",
        sex: "Female",
        contactNumber: "+91 7894561230",
        salary: "114500",
    },
];

export const rowCreateCallBackTableColumns: TableColumn<RowCreateCallBackData>[] = [
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        center: false,
    },
    {
        name: "Email",
        selector: (row) => `${row.email}`,
        sortable: true,
        center: false,
    },
    {
        name: "Experience",
        selector: (row) => `${row.experience}`,
        sortable: true,
        center: false,
    },
    {
        name: "Sex",
        cell: (row) => row.sex,
        sortable: true,
        center: false,
    },
    {
        name: "Contact Number",
        cell: (row) => row.contactNumber,
        sortable: true,
        center: false,
    },
    {
        name: "Salary",
        cell: (row) => <CustomCell value={row.salary} />,
        sortable: true,
        center: false,
    },
];

const CustomCell = ({ value }: CustomRowCreateInterFace) => {
    return (
        <span className={value > "150000" ? "highlight" : value < "40000" ? "danger" : ""}>
            ${value}
        </span>
    );
};