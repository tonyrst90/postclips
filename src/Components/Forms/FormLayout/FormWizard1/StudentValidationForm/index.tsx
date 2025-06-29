import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { Previous, StudentValidationFormTitle } from '@/Constant';
import { studentValidationFormSubTitle } from '@/Data/Forms/FormLayout';
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Col, Form } from 'reactstrap';
import BasicInfoForm from './BasicInfoForm';
import ProfileForm from './ProfileForm';
import SocialLinksForm from './SocialLinksForm';

const StudentValidationForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassWord: "", portfolioURL: "", projectDescription: "", imageUpload: "", twitterUrl: "", gitHubUrl: "", studentFile: "", positions: "", positionQuestion: "", });
    const [showSubmit, setShowSubmit] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleSubmitButton = () => {
        return toast.success("Successfully Completed");
    };
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = name === "agreeTerms" || name === "informationCheckBox" || name === "agreeConditions" ? event.target.checked : name === "imageUpload" || name === "studentFile" ? event.target.files?.[0] : event.target.value;
        if (name === "imageUpload") {
            const file = value as File | undefined;
            const reader = new FileReader();
            reader.onload = () => {
                const uploadedImageUrl = reader.result as string;
                setSelectedImage(uploadedImageUrl);
            };
            if (file) { reader.readAsDataURL(file); }
        }
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };
    const handleBackButton = () => {
        setShowSubmit(false);
        setStep((prev) => prev - 1)
    };
    const handleNextButton = () => {
        const { password, name, email, confirmPassWord, portfolioURL, projectDescription, imageUpload, twitterUrl, gitHubUrl, studentFile, positions, positionQuestion, } = formData;
        if (name !== "" && email !== "" && password !== "" && confirmPassWord !== "" && step === 1) {
            setStep(2);
        } else if (projectDescription !== "" && portfolioURL !== "" && imageUpload !== "" && step === 2) {
            setStep(3);
        } else if (twitterUrl !== "" && gitHubUrl !== "" && studentFile !== "" && positions !== "" && positionQuestion !== "" && step === 3) {
            setShowSubmit(true);
        } else { return toast.error("please fill out all the fields before moving on to the next step"); }
    };
    return (
        <Col xl={6}>
            <Card className="height-equal">
                <CommonCardHeader headClass='pb-0' title={StudentValidationFormTitle} span={studentValidationFormSubTitle} />
                <CardBody className="custom-input">
                    <Form className="form-wizard" id="regForm">
                        <div className={`tab ${step === 1 ? "d-block" : "d-none"}`}>
                            <BasicInfoForm formData={formData} updateFormData={updateFormData} />
                        </div>
                        <div className={`tab ${step === 2 ? "d-block" : "d-none"}`}>
                            <ProfileForm formData={formData} updateFormData={updateFormData} selectedImage={selectedImage} />
                        </div>
                        <div className={`tab ${step === 3 ? "d-block" : "d-none"}`}>
                            <SocialLinksForm formData={formData} updateFormData={updateFormData} />
                        </div>
                        <div className='text-end pt-3'>
                            {step > 1 && (<Button color="secondary" className='me-1' onClick={handleBackButton}>{Previous}</Button>)}
                            <Button color='primary' onClick={showSubmit ? handleSubmitButton : handleNextButton}>{showSubmit ? "Submit" : "Next"}</Button>
                        </div>
                        <div className="text-center">
                            <span className={`step ${step === 1 ? "active" : ""}`} /><span className={`step ${step === 2 ? "active" : ""}`} /> <span className={`step ${step === 3 ? "active" : ""}`} />
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
export default StudentValidationForm