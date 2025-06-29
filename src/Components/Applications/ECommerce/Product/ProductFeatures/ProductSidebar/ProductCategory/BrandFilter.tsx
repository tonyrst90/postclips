import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { deleteBrandState, filterBrandState } from '@/Redux/Reducers/ECommerce/ProductReducer';
import React from 'react'
import { Input, Label } from 'reactstrap';

const BrandFilter = () => {
    const { productItem, filterValue } = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();
    const brands = () => {
        let brandData: string[] = [];
        productItem.map((element) => {
            if (element.tags) {
                element.tags.map((item) => {
                    if (brandData.indexOf(item) === -1) {
                        brandData.push(item);
                    }
                });
            }
        });
        return brandData;
    };
    const filterBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            dispatch(filterBrandState({ brandChecked: e.target.value }));
        } else {
            dispatch(deleteBrandState({ brandUnChecked: e.target.value }));
        }
    };
    return (
        <div className="checkbox-animated mt-0">
            {brands().map((item, index) => (
                <Label className="d-block" key={index}>
                    <Input className="checkbox_animated" defaultChecked={filterValue.brand.includes(item) ? true : false} value={item} id={item} onChange={filterBrand} type="checkbox" />
                    {item}
                </Label>
            ))}
        </div>
    )
}
export default BrandFilter