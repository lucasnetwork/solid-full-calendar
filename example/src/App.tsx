import { createEffect, createSignal, onMount, type Component } from 'solid-js';
import dayGridPlugin from '@fullcalendar/daygrid'

import styles from './App.module.css';
import SolidCalendar from "solid-full-calendar" 
import { Calendar } from '@fullcalendar/core';


const App: Component = () => {
  const [events,setEvents] = createSignal([
    { title: 'Meeting', start: new Date() }
  ])
  let calendarRef!: Calendar
  return (
    <div  class={styles.App}>
      <SolidCalendar 
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={events()}
        />
    </div>
  );
};

export default App;
