import React, { useState } from 'react'
import { Button, Card, CardHeader, Collapse } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CommonCardProps } from '@/Types/SocialApp.type';

const CommonCard: React.FC<CommonCardProps> = ({ title, children, cardClass }) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Card className={cardClass ? cardClass : ''}>
            <CardHeader>
                <h2 className="mb-0">
                    <Button color='transparent' block className='btn-link d-flex justify-content-between text-start' onClick={toggle}>{title}
                        {collapsed ? <ChevronDown className='m-0' /> : <ChevronUp className='m-0' />}
                    </Button>
                </h2>
            </CardHeader>
            <Collapse isOpen={collapsed}>
                {children}
            </Collapse>
        </Card>
    )
}
export default CommonCard