'use client'
import Breadcrumbs from "@/CommonComponent/BreadCrumbs";
import { ECommerceTitle, ProductTitle } from "@/Constant";
import { Container } from "reactstrap";
import ProductFeatures from "./ProductFeatures";
import ProductGrid from "./ProductGrid";
import { useAppSelector } from "@/Redux/Hooks";

const ProductContainer = () => {
    const { sidebarOpen } = useAppSelector((state) => state.filter);

    return (
        <>
            <Breadcrumbs mainTitle={ProductTitle} parent={ECommerceTitle} title={ProductTitle} />
            <Container className={`product-wrapper ${sidebarOpen ? "sidebaron" : ""}`} fluid>
                <div className="product-grid">
                    <ProductFeatures />
                    <ProductGrid />
                </div>
            </Container>
        </>
    )
}
export default ProductContainer;