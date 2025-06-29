import { ImagePath, SuccessfullyCompleted } from '@/Constant'
import Image from 'next/image'
import React from 'react'

const CompletedForm = () => {
    return (
        <div className="form-completed">
            <Image src={`${ImagePath}/gif/dashboard-8/successful.gif`} width={100} height={100} alt="successful" />
            <h6>{SuccessfullyCompleted}</h6>
        </div>
    )
}
export default CompletedForm