import { ImagePath } from '@/Constant';
import { ProductModalProps } from '@/Types/ECommerce.type';
import React from 'react'
import { Col, Modal, ModalHeader, Row } from 'reactstrap';
import ModalProductDetails from './ModalProductDetails';
import ProductQuantity from './ProductQuantity';

const ProductModal: React.FC<ProductModalProps> = ({ value, setOpenModal, dataId, modelData }) => {
    const onCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Modal size="lg" isOpen={value} toggle={onCloseModal} centered wrapClassName='product-box'>
            <ModalHeader color='transparent' toggle={onCloseModal}>
                <Row className="product-box">
                    <Col lg={6} className="product-img">
                        <img alt="image" className="img-fluid" src={modelData?.image ? `${ImagePath}/${modelData.image}` : ""} />
                    </Col>
                    <Col lg={6} className="product-details text-start">
                        <ModalProductDetails modelData={modelData} />
                        <ProductQuantity dataId={dataId} modelData={modelData} />
                    </Col>
                </Row>
            </ModalHeader>
        </Modal>
    )
}
export default ProductModal;