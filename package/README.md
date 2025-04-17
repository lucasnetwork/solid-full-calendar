# Solis Full Calendar
A implementation unofficial of the [fullcalendar core](https://github.com/fullcalendar/fullcalendar) to solid js

## Installation
```sh
npm install solid-full-calendar @fullcalendar/core @fullcalendar/daygrid
```

## Example
```jsx
import Calendar from 'solid-full-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export function DemoApp() {
  return (
    <div>
      <h1>Demo App</h1>
      <Calendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
      />
    </div>
  )
}
```

### Using with solid start

```jsx
import { clientOnly } from "@solidjs/start";
const Calendar = clientOnly(() => import("solid-full-calendar"));
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export function DemoApp() {
  return (
    <div>
      <h1>Demo App</h1>
      <Calendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
      />
    </div>
  )
}
```

## Links

- [Documentation](https://fullcalendar.io/docs)
- [Example Project](https://github.com/lucasnetwork/solid-full-calendar/tree/main/example)