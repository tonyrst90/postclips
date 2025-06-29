import { HistoryCardProps } from '@/Types/Contact.type'
import React from 'react'
import { ModalHeader } from 'reactstrap'

const HistoryCard: React.FC<HistoryCardProps> = ({ historyToggle, showHistory }) => {
    return (
        <div className={showHistory ? 'show' : ''} id="right-history">
            <ModalHeader className="p-20 w-100" toggle={historyToggle}>{'Contact History'}</ModalHeader>
            <div className='history-details'>
                <div className='text-center'>
                    <i className='icofont icofont-ui-edit'></i>
                    <p>{'Contact has not been modified yet.'}</p>
                </div>
                <div className="d-flex">
                    <i className='icofont icofont-star me-3'></i>
                    <div className="flex-grow-1 mt-0">
                        <h3 className='mt-0'>{'Contact Created'}</h3>
                        <p className='mb-0'>{'Contact is created via mail'}</p>
                        <span className='f-12'>{'Sep 10, 2024 4:00'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HistoryCard;