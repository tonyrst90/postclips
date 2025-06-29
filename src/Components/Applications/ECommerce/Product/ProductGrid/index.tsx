import { ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { fetchProductData } from '@/Redux/Reducers/ECommerce/ProductReducer';
import { FilterValueTypes, ProductDataTypes } from '@/Types/ECommerce.type';
import React, { useEffect, useState } from 'react'
import { Card, Row } from 'reactstrap';
import ProductHover from './ProductHover';
import ProductDetails from './ProductDetails';
import ProductModal from './ProductModal';
import RatioImage from '@/CommonComponent/RatioImage';

const ProductGrid = () => {
    const dispatch = useAppDispatch();
    const { productItem, filterValue } = useAppSelector((state) => state.product);
    const { gridClass, columnClass } = useAppSelector((state) => state.filter);
    const [dataId, setDataId] = useState<number>();
    const [modelData, setModelData] = useState<ProductDataTypes>();
    const [openModal, setOpenModal] = useState(false);
    const onClickHandle = (data: ProductDataTypes) => {
        setOpenModal(true);
        setModelData(data);
        setDataId(data.id);
    };
    useEffect(() => {
        if (!productItem.length) { dispatch(fetchProductData()); }
    }, []);

    const productData = (products: ProductDataTypes[], filterValue: FilterValueTypes) => {
        let data: ProductDataTypes[] = [];
        products.map((item) => {
            let category;
            if (filterValue.category.includes(item.name)) {
                category = true;
            }
            let brand;
            item.tags.map((element) => {
                if (filterValue.brand.includes(element)) {
                    brand = true;
                }
            });
            let color;
            if (item.colors.includes(filterValue.color)) {
                color = true;
            }
            let value;
            if (item.price >= filterValue.value.min && item.price <= filterValue.value.max) {
                value = true;
            }
            let name;
            if (item.name.toLowerCase().includes(filterValue.searchBy.toLowerCase())) {
                name = true;
            }
            if (category && brand && color && value && name) {
                data.push(item);
            }
        });
        if (filterValue.sortBy === "Lowest Prices") {
            return data.sort((a, b) => a.price - b.price);
        } else if (filterValue.sortBy === "Highest Prices") {
            return data.sort((a, b) => b.price - a.price);
        } else {
            return data;
        }
    };

    return (
        <div className={`product-wrapper-grid ${gridClass}`}>
            <Row>
                {productData(productItem, filterValue).map((item) => (
                    <div className={gridClass ? "col-xl-12" : columnClass} key={item.id}>
                        <Card>
                            <div className='product-box'>
                                <div className='product-img'>
                                    {(item.status !== "none") ?
                                        (<div className={item.ribbonClassName}>{item.status}</div>) : ("")
                                    }
                                    <RatioImage className="img-fluid" src={`${ImagePath}/${item.image}`} alt="" />
                                    <ProductHover onClickHandle={onClickHandle} item={item} />
                                </div>
                                <ProductDetails item={item} />
                            </div>
                        </Card>
                    </div>
                ))}
                <ProductModal value={openModal} dataId={dataId} setOpenModal={setOpenModal} modelData={modelData} />
            </Row>
        </div>
    )
}
export default ProductGrid;