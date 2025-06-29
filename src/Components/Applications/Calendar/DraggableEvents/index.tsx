import { CalendarFilter, DraggableEventsTitle, RemoveAfterDrop } from '@/Constant';
import { calendarInitialState } from '@/Data/Applications/Calendar';
import React, { useState } from 'react'
import { Button, Col, Input, Label } from 'reactstrap';

const DraggableEvents = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen); }
    return (
        <Col xxl={3} className="box-col-4e">
            <div className="md-sidebar mb-3">
                <Button color='primary' className="md-sidebar-toggle" onClick={toggle}>{CalendarFilter}</Button>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div id="external-events">
                        <h4>{DraggableEventsTitle}</h4>
                        <div id="external-events-list">
                            {calendarInitialState.events.map((event) => (
                                <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event' id={event.id} title={event.title} key={event.id}>
                                    <div className="fc-event-main">
                                        <i className={`me-2 fa fa-${event.icon}`}></i>
                                        {event.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>
                            <Input className="checkbox_animated" id="drop-remove" type="checkbox" />
                            <Label htmlFor="drop-remove">{RemoveAfterDrop}</Label>
                        </p>
                    </div>
                </div>
            </div>
        </Col>
    )
}
export default DraggableEvents