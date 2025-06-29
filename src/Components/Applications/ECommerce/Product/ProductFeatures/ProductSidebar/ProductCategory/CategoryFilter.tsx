import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { deleteCategoryState, filterCategoryState } from '@/Redux/Reducers/ECommerce/ProductReducer';
import React from 'react'
import { Input, Label } from 'reactstrap';

const CategoryFilter = () => {
    const { productItem, filterValue } = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();
    const category = () => {
        let categoryData: string[] = [];
        productItem.map((element) => {
            if (element.name) {
                if (categoryData.indexOf(element.name) === -1) {
                    categoryData.push(element.name);
                }
            }
        });
        return categoryData;
    };
    const filterCategory = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.checked) {
            dispatch(filterCategoryState({ categoryChecked: e.target.value }));
        } else {
            dispatch(deleteCategoryState({ categoryUnChecked: e.target.value }));
        }
    };
    return (
        <div className="checkbox-animated mt-0">
            {category().map((item, i) => (
                <Label className="d-block" key={i}>
                    <Input className="checkbox_animated" defaultChecked={filterValue.category.includes(item) ? true : false} type="checkbox" value={item} onChange={filterCategory} />
                    {item}
                </Label>
            ))}
        </div>
    )
}
export default CategoryFilter