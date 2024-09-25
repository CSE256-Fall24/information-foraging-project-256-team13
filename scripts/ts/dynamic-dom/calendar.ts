import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {D} from "../core/dom/document";

export class wunsCalendar {
    public static setupAll() {
            let calendarEl = document.getElementById('calendar-display');
            let calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            initialView: 'dayGridMonth',
            initialDate: '2024-08-15',
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
                {
                    title: '5:30 p.m. – Popsicles in the Park - Back to School',
                    start: '2024-08-28',
                },
                {
                    title: 'Staff Orientation',
                    start: '2024-08-28',
                    end: '2024-08-30',
                }
            ],
        });
            calendar.render();
        }
    }


