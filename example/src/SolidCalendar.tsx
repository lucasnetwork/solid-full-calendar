import { Calendar, CalendarOptions } from "@fullcalendar/core";
import { onMount, createSignal, createEffect, type Ref } from "solid-js";

const SolidCalendar = (
  props: CalendarOptions & {
    ref?: Ref<Calendar>;
  },
) => {
  let divCalendar!: HTMLDivElement;
  const [calendar, setCalendar] = createSignal<Calendar>();

  onMount(() => {
    const calendar = new Calendar(divCalendar, props);
    calendar.render();
    if (typeof props?.ref === "function") {
      props?.ref?.(calendar);
    }
    setCalendar(calendar);
  });

  // createEffect(() => {
  //   const newCalendar = calendar();
  //   if (newCalendar) {
  //     newCalendar.resetOptions({
  //       ...props,
  //     });
  //   }
  // });

  return <div ref={divCalendar} />;
};
export default SolidCalendar;
