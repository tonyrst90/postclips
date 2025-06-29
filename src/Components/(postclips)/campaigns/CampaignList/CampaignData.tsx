import RatioImage from "@/CommonComponent/RatioImage";
import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import Image from "next/image";
import { ProductListType } from "@/Types/ECommerce.type";
import Link from "next/link";
import { TableColumn } from "react-data-table-component";
import { Badge, FormGroup, Input } from "reactstrap";
import dayjs from 'dayjs';

export const campaignListBodyData = [
    {
        name: "Choose Product",
        options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
    },
    {
        name: "Choose Category",
        options: ["Furniture", "Smart Gadgets", "Electrics"],
    },
    {
        name: "Choose Sub Category",
        options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
    },
    {
        name: "Status",
        options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
    },
    {
        name: "Price",
        options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
    },
];

export const campaignListTableData: ProductListType[] = [
    {
        imageSrc: 'dashboard-8/product-categories/laptop.png',
        productName: 'Apple Desktop 2024',
        sku: '02145YK796',
        category: 'Laptops',
        price: '56000.00',
        quantity: '13',
        status: 'Sold Out',
        rating: 4,
    },
    {
        imageSrc: 'dashboard-8/product-categories/phone.png',
        productName: 'Apple iPhone 13 Pro',
        sku: '56379FG3AW',
        category: 'Smart Phones',
        price: '19000.00',
        quantity: '48',
        status: 'In Stock',
        rating: 3,
    },
    {
        imageSrc: 'dashboard-8/product-categories/headphone.png',
        productName: 'Headphones',
        sku: '33KR5689B1',
        category: 'Smart Headphones',
        price: '10000.00',
        quantity: '5',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/wireless-headphone.png',
        productName: 'Wireless headphone',
        sku: 'AD6789HEY0',
        category: 'Smart Headphones',
        price: '15000.00',
        quantity: '4',
        status: 'Sold Out',
        rating: 4,
    },
    {
        imageSrc: 'dashboard-2/product/1.png',
        productName: 'Wood Chair',
        sku: '456DF78DFQ',
        category: 'Furniture',
        price: '99000.00',
        quantity: '2',
        status: 'Sold Out',
        rating: 5,
    },
    {
        imageSrc: 'email-template/3.png',
        productName: 'Wood Chair',
        sku: '5633GD3K54',
        category: 'Furniture',
        price: '1000.00',
        quantity: '8',
        status: 'Sold Out',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/ipad.png',
        productName: 'MacBook Air 13.3-inch',
        sku: '589KO8PPQ8',
        category: 'Laptops',
        price: '45000.00',
        quantity: '10',
        status: 'Sold Out',
        rating: 4,
    },
    {
        imageSrc: 'dashboard-8/product-categories/mouse.png',
        productName: 'M185 Compact Wireless Mouse',
        sku: '02145YK796',
        category: 'E-Commerce',
        price: '19000.00',
        quantity: '48',
        status: 'In Stock',
        rating: 2,
    },
    {
        imageSrc: 'other-images/cart-img.jpg',
        productName: 'Wood chairs',
        sku: '568GH3LLQ2',
        category: 'Furniture',
        price: '78000.00',
        quantity: '50',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/watch.png',
        productName: 'Smart watch',
        sku: '58FR7K34F6',
        category: 'Electric',
        price: '25000.00',
        quantity: '48',
        status: 'Sold Out',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/dvd.png',
        productName: 'DVD',
        sku: 'HG5667DFQ1',
        category: 'Electric',
        price: '5600.00',
        quantity: '10',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/speaker.png',
        productName: 'Speakers',
        sku: '02145YK796',
        category: 'Electric',
        price: '12200.00',
        quantity: '50',
        status: 'Sold Out',
        rating: 4,
    },
    {
        imageSrc: 'dashboard-8/product-categories/phone.png',
        productName: 'Apple iphone 13 Pro',
        sku: '56379FG3AW',
        category: 'Smart Phones',
        price: '19000.00',
        quantity: '48',
        status: 'In Stock',
        rating: 3,
    },
    {
        imageSrc: 'dashboard-8/product-categories/headphone.png',
        productName: 'Headphones',
        sku: '33KR5689B1',
        category: 'Smart Headphones',
        price: '10000.00',
        quantity: '5',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'other-images/cart-img.jpg',
        productName: 'Wood chairs',
        sku: '568GH3LLQ2',
        category: 'Furniture',
        price: '78000.00',
        quantity: '50',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/watch.png',
        productName: 'Smart watch',
        sku: '58FR7K34F6',
        category: 'Electric',
        price: '25000.00',
        quantity: '48',
        status: 'Sold Out',
        rating: 4,
    },
    {
        imageSrc: 'dashboard-8/product-categories/phone.png',
        productName: 'Apple iPhone 13 Pro',
        sku: '56379FG3AW',
        category: 'Smart Phones',
        price: '19000.00',
        quantity: '48',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/headphone.png',
        productName: 'Headphones',
        sku: '33KR5689B1',
        category: 'Smart Headphones',
        price: '10000.00',
        quantity: '5',
        status: 'In Stock',
        rating: 3,
    },
    {
        imageSrc: 'dashboard-8/product-categories/wireless-headphone.png',
        productName: 'Wireless headphone',
        sku: 'AD6789HEY0',
        category: 'Smart Headphones',
        price: '15000.00',
        quantity: '4',
        status: 'Sold Out',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-2/product/1.png',
        productName: 'Wood Chair',
        sku: '456DF78DFQ',
        category: 'Furniture',
        price: '99000.00',
        quantity: '2',
        status: 'Sold Out',
        rating: 4,
    },
    {
        imageSrc: 'email-template/3.png',
        productName: 'Wood Chair',
        sku: '5633GD3K54',
        category: 'Furniture',
        price: '1000.00',
        quantity: '8',
        status: 'Sold Out',
        rating: 3,
    },
    {
        imageSrc: 'dashboard-8/product-categories/laptop.png',
        productName: 'Apple Desktop 2024',
        sku: '02145YK796',
        category: 'Laptops',
        price: '56000.00',
        quantity: '13',
        status: 'Sold Out',
        rating: 4,
    },
    {
        imageSrc: 'dashboard-8/product-categories/phone.png',
        productName: 'Apple iPhone 13 Pro',
        sku: '56379FG3AW',
        category: 'Smart Phones',
        price: '19000.00',
        quantity: '48',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/phone.png',
        productName: 'Apple iPhone 13 Pro',
        sku: '56379FG3AW',
        category: 'Smart Phones',
        price: '19000.00',
        quantity: '48',
        status: 'In Stock',
        rating: 5,
    },
    {
        imageSrc: 'dashboard-8/product-categories/headphone.png',
        productName: 'Headphones',
        sku: '33KR5689B1',
        category: 'Smart Headphones',
        price: '10000.00',
        quantity: '5',
        status: 'In Stock',
        rating: 4,
    },
    {
        imageSrc: 'dashboard-8/product-categories/wireless-headphone.png',
        productName: 'Wireless headphone',
        sku: 'AD6789HEY0',
        category: 'Smart Headphones',
        price: '15000.00',
        quantity: '4',
        status: 'Sold Out',
        rating: 2,
    },
    {
        imageSrc: 'dashboard-2/product/1.png',
        productName: 'Wood Chair',
        sku: '456DF78DFQ',
        category: 'Furniture',
        price: '99000.00',
        quantity: '2',
        status: 'Sold Out',
        rating: 2,
    },
];

export const campaignListColumns: TableColumn<ProductListType>[] = [
    {
        name: '',
        cell: () => (
            <FormGroup check>
                <Input className="checkbox-primary" type="checkbox" />
            </FormGroup>
        ),
        sortable: false,
        width: '3%'
    },
    {
        name: 'Product Name',
        selector: (row) => row.productName,
        sortable: true,
        cell: (row) => (
            <div className="product-names">
                <div className="light-product-box">
                    <RatioImage className="img-fluid" src={`${ImagePath}/${row.imageSrc}`} alt="laptop" />
                </div>
                <p>{row.productName}</p>
            </div>
        ),
        width: '20%'
    },
    {
        name: 'SKU',
        selector: (row) => row.sku,
        sortable: true,
        cell: (row) => <p className="f-light">{row.sku}</p>,
    },
    {
        name: 'Category',
        selector: (row) => row.category,
        sortable: true,
        cell: (row) => <p className="f-light">{row.category}</p>,
    },
    {
        name: 'Price',
        selector: (row) => row.price,
        sortable: true,
        cell: (row) => <p className="f-light">{row.price}</p>,
    },
    {
        name: 'Qty',
        selector: (row) => row.quantity,
        sortable: true,
        cell: (row) => <p className="f-light">{row.quantity}</p>,
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        cell: (row) => (
            <Badge color="" className={`badge-${row.status === 'Sold Out' ? 'light-secondary' : 'light-primary'}`}>{row.status}</Badge>
        ),
    },
    {
        name: 'Rating',
        selector: (row) => row.rating,
        sortable: true,
        cell: (row) => (
            <div className="rating">
                {[...Array(row.rating)].map((_, index) => (
                    <i key={index} className="fa fa-star txt-warning"></i>
                ))}
                {[...Array(5 - row.rating)].map((_, index) => (
                    <i key={index} className="fa fa-star f-light"></i>
                ))}
            </div>
        ),
    },
    {
        name: 'Action',
        cell: (row) => (
            <div className="product-action">
                <Link href={`/app/ecommerce/add_product`}>
                    <SVG iconId='edit-content' />
                </Link>
                <SVG iconId='trash1' />
            </div>
        ),
        sortable: true,
    },
];

export interface Campaign {
    id: string;
    profile_picture: string;
    title: string;
    targeted_social_networks: string[];
    created_at: string;
    end_date: string;
    total_budget: number;
    status: string;
}

export const campaignColumns: TableColumn<Campaign>[] = [
    {
        name: 'Campaign',
        selector: (row) => row.title,
        sortable: true,
        cell: (row) => (
            <div className="campaign-info d-flex align-items-center gap-2">
                <div className="campaign-image" style={{ width: '50px', height: '50px', position: 'relative', flexShrink: 0 }}>
                    <Image 
                        src={row.profile_picture || `${ImagePath}/dashboard-3/user/3.png`}
                        alt={row.title}
                        className="rounded-circle"
                        width={50}
                        height={50}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="campaign-title">
                    <p className="mb-0 fw-bold">{row.title}</p>
                </div>
            </div>
        ),
        width: '30%'
    },
    {
        name: 'Platforms',
        selector: (row) => row.targeted_social_networks.length,
        sortable: true,
        cell: (row) => (
            <div className="platforms">
                <Badge color="light-primary">
                    {row.targeted_social_networks.length}
                </Badge>
            </div>
        ),
        width: '20%'
    },
    {
        name: 'Duration',
        sortable: true,
        cell: (row) => {
            const startDate = dayjs(row.created_at).format('MMM D, YYYY');
            const endDate = row.end_date ? dayjs(row.end_date).format('MMM D, YYYY') : 'No end date';
            const duration = row.end_date ? 
                `${dayjs(row.end_date).diff(dayjs(row.created_at), 'day')} days` : 
                'Draft';

            return (
                <div className="duration">
                    <p className="mb-0">
                        {startDate} {row.end_date ? `- ${endDate}` : ''}
                    </p>
                    <small className="text-muted">
                        {duration}
                    </small>
                </div>
            );
        },
        width: '20%'
    },
    {
        name: 'Budget',
        selector: (row) => row.total_budget,
        sortable: true,
        cell: (row) => (
            <div className="budget">
                ${row.total_budget.toLocaleString()}
            </div>
        ),
        width: '15%'
    },
    {
        name: 'Status',
        selector: (row) => row.status,
        sortable: true,
        cell: (row) => (
            <Badge
                color={row.status === 'active' ? 'success' :
                    row.status === 'pending' ? 'warning' : 'secondary'}
                className="text-capitalize"
            >
                {row.status}
            </Badge>
        ),
        width: '15%'
    }
];