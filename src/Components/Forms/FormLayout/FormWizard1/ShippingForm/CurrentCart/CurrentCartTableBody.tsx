import { ImagePath } from '@/Constant';
import { currentCartTableBodyData } from '@/Data/Forms/FormLayout';
import React from 'react'

const CurrentCartTableBody = () => {
    return (
        <tbody>
            {currentCartTableBodyData.map((data, index) => (
                <tr key={index}>
                    <td>
                        <img src={`${ImagePath}/${data.imagePath}`} alt="t-shirt" />
                    </td>
                    <td>
                        <div>
                            <h3>{data.productName}</h3>
                            <span>{data.productSum}</span>
                        </div>
                    </td>
                    <td>
                        <p>{data.price}</p>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
export default CurrentCartTableBody