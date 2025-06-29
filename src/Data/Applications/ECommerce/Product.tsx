import { Clock, CreditCard, Gift, Truck } from "react-feather";

//product data
export const gridOptionsData = [
    {
        anchorClass: 2,
        colClass: "col-xl-6 col-sm-6",
        gridLine: ["1", "2"],
    },
    {
        anchorClass: 3,
        colClass: "col-xl-4 col-sm-4",
        gridLine: ["3", "4", "5"],
    },
    {
        anchorClass: 4,
        colClass: "col-xl-3 col-sm-3",
        gridLine: ["6", "7", "8", "9"],
    },
    {
        anchorClass: 6,
        colClass: "col-xl-2 col-sm-2",
        gridLine: ["10", "11", "12", "13", "14", "15"],
    },
];

export const productSize = ['M', 'L', 'XL']

export const productSettings = {
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: true,
    dots: false,
};

export const commonProductSlideList = [1, 2, 3, 4, 5]

export const productSlide1 = [
    {
        image: "01.jpg",
        title: "Woman T-shirt",
        text: "$100.00",
    },
    {
        image: "02.jpg",
        title: "Dream Beauty Fashion",
        text: "$150.00",
    },
    {
        image: "03.jpg",
        title: "VOXATI",
        text: "$200.00",
    },
];

export const productSlide2 = [
    {
        image: "01.jpg",
        title: "Fancy Shirt",
        text: "$100.00",
    },
    {
        image: "02.jpg",
        title: "Fancy Shirt",
        text: "$100.00",
    },
    {
        image: "03.jpg",
        title: "Fancy Shirt",
        text: "$100.00",
    },
];

export const productColorList = ['primary', 'secondary', 'success', 'info', 'warning'];
export const brandData = ["Clothing", "Bags", "Footwear", "Watches", "Accessories"];
export const productPageMainNav = ['Febric', 'Video', 'Details', 'Brand']

export const productIconList = [
    {
        id: 1,
        link: 'https://www.facebook.com/',
        icon: 'facebook'
    },
    {
        id: 2,
        link: 'https://accounts.google.com/',
        icon: 'google-plus'
    },
    {
        id: 3,
        link: 'https://twitter.com/',
        icon: 'twitter'
    },
    {
        id: 4,
        link: 'https://www.instagram.com/',
        icon: 'instagram'
    },
    {
        id: 5,
        link: 'https://dashboard.rss.com/auth/sign-in/',
        icon: 'rss'
    },
];

export const shippingData = [
    {
        id: 1,
        icon: <Truck />,
        title: 'Free Shipping',
        subTitle: 'Free Shipping World Wide'
    },
    {
        id: 2,
        icon: <Clock />,
        title: '24 X 7 Service',
        subTitle: 'Online Service For New Customer'
    },
    {
        id: 3,
        icon: <Gift />,
        title: 'Festival Offer',
        subTitle: 'New Online Special Festival'
    },
    {
        id: 4,
        icon: <CreditCard />,
        title: 'Online Payment',
        subTitle: 'Contrary To Popular Belief.'
    },
];

export const productPageTab = [
    {
        id: 1,
        paragraph: ['Refresh your wardrobe with this chic top. With an eye-catching square neck, this top also features pretty puff sleeves. Stunning pink colour Classic solid pattern Square neck Elasticated puff sleeves Belt included, Polyester fabric, machine wash..', 'Tee Stores is an Indian contemporary clothing brand. The product pages display a fine quality fabric with colorful description. We offer many vivid designs, art, styles that "combine heritage with modernity, simplicity, playfulness and street style".']
    },
    {
        id: 2,
        paragraph: ["Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With", "Button Closure Long Sleeve Casual Torn Lycra Denim Jacket."]
    },
    {
        id: 3,
        paragraph: ["Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton", "T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve."]
    },
    {
        id: 4,
        paragraph: ["Product Dimensions : 18 x 18 x 4 cm", "Date First Available : 31 March 2024", "Manufacturer : Tee Stores", "Item part number : TS-WT721-XS-WHITE"]
    },
];
//Add product data
export const addProductNav = [
    {
        id: 1,
        icon: 'product-detail',
        title: 'Add Product Details',
        subTitle: 'Add product name & details'
    },
    {
        id: 2,
        icon: 'product-gallery',
        title: 'Product Gallery',
        subTitle: 'Thumbnail & add product gallery'
    },
    {
        id: 3,
        icon: 'product-category',
        title: 'Product Categories',
        subTitle: 'Add product category, status and tags'
    },
    {
        id: 4,
        icon: 'pricing',
        title: 'Selling Prices',
        subTitle: 'Add product basic price & discount'
    },
    {
        id: 5,
        icon: 'advance',
        title: 'Advance',
        subTitle: 'Add meta details & inventory details'
    },
];

export const productGalleryData = [
    {
        id: 1,
        title: 'Product Image',
        icon: 'file-upload',
        spanText: 'SVG,PNG,JPG or GIF'
    },
    {
        id: 2,
        title: 'Product Gallery',
        icon: 'file-upload1',
        spanText: 'Add Product Gallery Images'
    },
];

export const addCategoryItem = ["Toys & games", "Sportswear", "Jewellery", "Furniture and Decor", "Health, Personal Care, and Beauty", "Auto and Parts", "Baby Care Products"];
export const productTagItem = ["watches", "sports", "clothes", "bottles"];
export const publishStatusItem = ["Publish", "Drafts", "Unpublish"];
export const chooseCurrencyItem = ["Dollar $", "Euro €", "Rupees ₹", "British pounds £", "Russian Ruble ₽", "Japanese Yen ¥", "Singapore Dollar S$"];
export const stockAvailabilityItem = ["In stock", "Out of stock", "Pre-order"]
export const lowStockItem = ["Low Stock (5 or less)", "Low Stock (10 or less)", "Low Stock (20 or less)", "Low Stock (25 or less)", "Low Stock (30 or less)"]
export const stateItem = ["State", "Gujarat", "Punjab", "Himachal pradesh", "Goa", "Sikkim", "Telangana"];
export const basicShippingItem = ["Basic Shipping", "Expedited Shipping", "International Shipping", "Free Shipping", "Same-Day or Next-Day Shipping", "Flat Rate Shipping", "Local Pickup"];

export const sellingPriceRadio = [
    {
        id: 1,
        text: 'Fixed Price'
    },
    {
        id: 2,
        text: 'BOGO(Buy one, Get one)',
        check: 'checked'
    },
    {
        id: 3,
        text: 'Seasonal or holiday discount'
    },
    {
        id: 4,
        text: 'Percentage-based discount(%)'
    },
    {
        id: 5,
        text: 'Volume or bulk discount'
    },
];


//cart
export const cartTableHead = ["Product", "Product Name", "Price", "Quantity", "Action", "Total"];

//checkout
export const countryMenu = ["Choose...", "U.K", "U.S", "India"];

//pricing
export const pricingContentList = ['50 Email Accounts', 'Maintenance', '15 Subdomains']
export const becomeMemberData = [
    {
        id: 1,
        title: 'Standard',
        amount: 10,
        content: '50GB Disk Space'
    },
    {
        id: 2,
        title: 'Premium',
        amount: 20,
        content: '10% on all product'
    },
    {
        id: 3,
        title: 'Auther pack',
        amount: 50,
        content: 'Upload 50 product'
    },
    {
        id: 4,
        title: 'Auther pack',
        amount: 50,
        content: 'Upload 50 product'
    },
];

export const simplePricingData = [
    {
        id: 1,
        title: 'Standard',
        amount: 15,
        text: 'Standard Plan'
    },
    {
        id: 2,
        title: 'Business',
        amount: 25,
        text: 'Business Plan'
    },
    {
        id: 3,
        title: 'Premium',
        amount: 35,
        text: 'Premium Plan'
    },
    {
        id: 4,
        title: 'Extra',
        amount: 45,
        text: 'Extra Plan'
    },
];
