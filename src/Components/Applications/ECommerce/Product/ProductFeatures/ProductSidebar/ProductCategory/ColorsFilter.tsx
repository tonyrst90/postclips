import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setColorState } from '@/Redux/Reducers/ECommerce/ProductReducer';
import React from 'react'

const ColorsFilter = () => {
    const { productItem } = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();
    const colors = () => {
        let colorData: string[] = [];
        productItem.map((element) => {
            if (element.colors) {
                element.colors.map((item) => {
                    if (colorData.indexOf(item) === -1) {
                        colorData.push(item);
                    }
                });
            }
        });
        return colorData;
    };
    return (
        <div className="color-selector">
            <ul>
                {colors().map((color, i) => (
                    <li key={i} className={color} title={color} onClick={() => { dispatch(setColorState(color)) }}></li>
                ))}
            </ul>
        </div>
    )
}
export default ColorsFilter