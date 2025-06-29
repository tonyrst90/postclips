import React, { useEffect } from 'react'
import { Col } from 'reactstrap';
import ReactDOMServer from 'react-dom/server';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventClickArg } from '@fullcalendar/core';
import Swal from 'sweetalert2';
import { calendarInitialState } from '../../../../Data/Applications/Calendar';
import EventDetails from './EventDetails';

const DefaultCalendar = () => {
    const state = calendarInitialState;
    useEffect(() => {
        const draggableEl = document.getElementById("external-events") as HTMLElement;
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let title = eventEl.getAttribute("title");
                let id = eventEl.getAttribute("id");
                return {
                    title: title,
                    id: id,
                };
            },
        });
    }, []);
    const eventClick = (eventClick: EventClickArg) => {
        const eventDetailsHtml = ReactDOMServer.renderToString(<EventDetails eventClick={eventClick} />);
        Swal.fire({
            title: eventClick.event.title,
            html: eventDetailsHtml,
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Remove Event",
            cancelButtonText: "Close",
        }).then((result) => {
            if (result.value) {
                eventClick.event.remove();
                Swal.fire("Deleted!", "Your Event has been deleted.", "success");
            }
        });
    };
    return (
        <Col xxl={9} className="box-col-8">
            <div className="calendar-default">
                <FullCalendar
                    initialView='dayGridMonth'
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}
                    rerenderDelay={10}
                    eventDurationEditable={false}
                    editable={true}
                    droppable={true}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    events={state.calendarEvents}
                    eventClick={eventClick}
                />
            </div>
        </Col>
    )
}
export default DefaultCalendar