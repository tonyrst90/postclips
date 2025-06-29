import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import { ActiveCallbackProp } from '@/Types/ECommerce.type';
import { productGalleryData } from '@/Data/Applications/ECommerce/Product';
import SVG from '@/CommonComponent/SVG';
import CommonFileUpload from '@/Components/BonusUi/Dropzone/Common/CommonFileUpload';

const ProductGallery: React.FC<ActiveCallbackProp> = ({ activeCallBack }) => {
   
    return (
        <div className="sidebar-body">
            {productGalleryData.map((item:any) => (
                <div className="product-upload" key={item.id}>
                    <p>{item.title}</p>
                    <CommonFileUpload/>
                </div>
            ))}
            <div className="product-buttons">
                <Button color='transparent' className='me-1' onClick={() => activeCallBack(1)}>
                    <div className="d-flex align-items-center gap-sm-2 gap-1">
                        <SVG iconId='back-arrow' /> {'Previous'}
                    </div>
                </Button>
                <Button color='transparent' onClick={() => activeCallBack(3)}>
                    <div className="d-flex align-items-center gap-sm-2 gap-1">
                        {'Next'} <SVG iconId='front-arrow' />
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default ProductGallery;

