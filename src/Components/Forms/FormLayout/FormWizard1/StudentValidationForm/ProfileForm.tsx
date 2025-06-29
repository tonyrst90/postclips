import { AddProfile, ImagePath, PortfolioURL, ProjectDescriptionText } from '@/Constant';
import { StudentValidationFormProp } from '@/Types/Forms.type';
import React, { useRef } from 'react'
import { Col, Input, Label, Row } from 'reactstrap';

const ProfileForm: React.FC<StudentValidationFormProp> = ({ formData, updateFormData, selectedImage, }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleImageChange = () => {
        if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <Row className="g-3 avatar-upload">
            <Col xs={12}>
                <div>
                    <div className="avatar-edit">
                        <Input onChange={updateFormData} innerRef={fileInputRef} type="file" accept=".png, .jpg, .jpeg" name="imageUpload" />
                        <Label htmlFor="imageUpload" onClick={handleImageChange} />
                    </div>
                    <div className="avatar-preview">
                        <div id="image" style={{ backgroundImage: selectedImage ? `url(${selectedImage})` : `url(${ImagePath}/forms/user.png)`, }} />
                    </div>
                </div>
                <h3>{AddProfile}</h3>
            </Col>
            <Col xs={12}>
                <Label>{PortfolioURL}</Label>
                <Input value={formData.portfolioURL} onChange={updateFormData} name="portfolioURL" type="url" placeholder="https://PostClips" />
            </Col>
            <Col xs={12}>
                <Label>{ProjectDescriptionText}</Label>
                <Input type="textarea" value={formData.projectDescription} onChange={updateFormData} name="projectDescription" rows={2} />
            </Col>
        </Row>
    )
}
export default ProfileForm