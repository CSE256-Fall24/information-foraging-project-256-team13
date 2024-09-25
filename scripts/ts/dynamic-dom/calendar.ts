import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {D} from "../core/dom/document";

export class wunsCalendar {
    public static setupAll() {
        Calendar.discardAll();
            const calendarEl = document.getElementById('calendar');
            let calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            initialView: 'dayGridMonth',
            initialDate: '2024-08-07',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
            },
            events: [
                {
                    title: 'All Day Event',
                    start: '2024-08-01',
                },
            ],
        });
            calendar.render();
        }
    }


