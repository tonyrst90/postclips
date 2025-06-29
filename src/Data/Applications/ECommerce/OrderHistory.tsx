import { Href, ImagePath } from "@/Constant";
import { OrderHistoryImageType, OrderHistoryTableColumns } from "@/Types/ECommerce.type";
import Image from "next/image";
import Link from "next/link";
import { MoreVertical } from "react-feather";

export const orderData = [
    {
        id: 1,
        name: "Women Top",
        image: "product-table-6.png",
    },
    {
        id: 2,
        name: "Women Shorts",
        image: "product-table-5.png",
    },
    {
        id: 3,
        name: "Cyclamen",
        image: "product-table-4.png",
    },
    {
        id: 4,
        name: "Men dashed Denim jacket",
        image: "product-table-3.png",
    },
    {
        id: 5,
        name: "Blue shirt",
        image: "product-table-2.png",
    },
    {
        id: 6,
        name: "Red shirt",
        image: "product-table-1.png",
    },
    {
        id: 7,
        name: "Red shirt",
        image: "product-table-1.png",
    },
    {
        id: 8,
        name: "Women Top",
        image: "product-table-6.png",
    },
    {
        id: 9,
        name: "Women Shorts",
        image: "product-table-5.png",
    },
];

export const orderHistoryData = [
    {
        image: "15.png",
        productName: "Iphone6 mobile",
        tag: "Cancelled",
        size: "10cm x 15cm",
        color: "Black",
        articleNumber: 5748214,
        units: 1,
        price: "$25",
        icon: <MoreVertical />,
    },
    {
        image: "3.png",
        productName: "Fancy Ladies Jacket",
        tag: "Shipped",
        size: "XL",
        color: "Light gray",
        articleNumber: 3581714,
        units: 1,
        price: "$24",
        icon: <MoreVertical />,
    },
    {
        image: "1.png",
        productName: "Long Top",
        tag: "Processing",
        size: "M",
        color: "Lavender",
        articleNumber: 4215738,
        units: 1,
        price: "$21",
        icon: <MoreVertical />,
    },

    {
        image: "4.png",
        productName: "Man shoes",
        tag: "Processing",
        size: "8",
        color: "Black & white",
        articleNumber: 1756457,
        units: 1,
        price: "$18",
        icon: <MoreVertical />,
    },

    {
        image: "2.png",
        productName: "Ladies Handbag",
        tag: "Shipped",
        size: "25cm x 20cm",
        color: "Black",
        articleNumber: 6748142,
        units: 1,
        price: "$14",
        icon: <MoreVertical />,
    },
    {
        image: "10.png",
        productName: "Ladies side bag",
        tag: "Shipped",
        size: "22cm x 18cm",
        color: "Brown",
        articleNumber: 7451725,
        units: 1,
        price: "$13",
        icon: <MoreVertical />,
    },
    {
        image: "14.png",
        productName: "Watch",
        tag: "Cancelled",
        size: "27mm",
        color: "Brown",
        articleNumber: 2471254,
        units: 1,
        price: "$12",
        icon: <MoreVertical />,
    },
    {
        image: "13.png",
        productName: "Fancy watch",
        tag: "Processing",
        size: "35mm",
        color: "Blue",
        articleNumber: 5476182,
        units: 1,
        price: "$10",
        icon: <MoreVertical />,
    },
    {
        image: "11.png",
        productName: "Slipper",
        tag: "Cancelled",
        size: "6",
        color: "Blue",
        articleNumber: 8475112,
        units: 1,
        price: "$6",
        icon: <MoreVertical />,
    },
    {
        image: "12.png",
        productName: "Ladies Slipper",
        tag: "Shipped",
        size: "6",
        color: "Brown & white",
        articleNumber: 4127421,
        units: 1,
        price: "$6",
        icon: <MoreVertical />,
    },
];

const OrderHistoryImage: React.FC<OrderHistoryImageType> = ({ name }) => {
    return <Image priority width={30} height={30} className="img-fluid img-30 my-3 rounded-3" src={`${ImagePath}/product/${name}`} alt="#" />;
};

const OrderDataHistory: React.FC<OrderHistoryImageType> = ({ name, tag }) => {
    return (
        <div className="product-name d-flex flex-column align-items-center">
            <Link href={Href}>{name}</Link>
            <div className="order-process">
                <span className="order-process-circle"></span>{tag}
            </div>
        </div>
    );
};

export const orderHistoryDataColumn = [
    {
        name: "Product",
        cell: (row: OrderHistoryTableColumns) => <OrderHistoryImage name={row.image} />,
        center: true,
    },
    {
        name: "Product Name",
        selector: (row: OrderHistoryTableColumns) => `${row.productName}`,
        cell: (row: OrderHistoryTableColumns) => <OrderDataHistory name={row.productName} tag={row.tag} />,
        sortable: true,
        center: true,
        grow: 2,
    },
    {
        name: "Size",
        selector: (row: OrderHistoryTableColumns) => `${row.size}`,
        sortable: true,
        center: true,
    },
    {
        name: "Color",
        selector: (row: OrderHistoryTableColumns) => `${row.color}`,
        sortable: true,
        center: true,
    },
    {
        name: "Article Number",
        selector: (row: OrderHistoryTableColumns) => row["articleNumber"],
        sortable: true,
        center: true,
        grow: 2,
    },
    {
        name: "Units",
        selector: (row: OrderHistoryTableColumns) => row["units"],
        center: true,
    },
    {
        name: "Price",
        selector: (row: OrderHistoryTableColumns) => row["price"],
        sortable: true,
        center: true,
    },
    {
        name: <MoreVertical />,
        cell: (row: OrderHistoryTableColumns) => row["icon"],
        center: true,
    },
];
