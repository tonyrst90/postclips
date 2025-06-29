import { stepperHorizontalData } from '@/Data/Forms/FormLayout'
import { StepperHorizontalProp } from '@/Types/Forms.type'
import React from 'react'

const StepperHorizontal: React.FC<StepperHorizontalProp> = ({ step, finishClicked }) => {
    return (
        <>
            {stepperHorizontalData.map((data, index) => (
                <div key={index} className={`stepper-one  step ${step > index + 1 || finishClicked === true ? "done active " : ""}`}>
                    <div className="step-circle">
                        <span>{index + 1}</span>
                    </div>
                    <div className="step-title">{data}</div>
                    <div className="step-bar-left" />
                    <div className="step-bar-right" />
                </div>
            ))}
        </>
    )
}
export default StepperHorizontal