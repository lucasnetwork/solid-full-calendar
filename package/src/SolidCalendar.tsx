import { Calendar, CalendarOptions } from "@fullcalendar/core";
import {
  onMount,
  createSignal,
  createEffect,
  type Ref,
  splitProps,
} from "solid-js";

const SolidCalendar = (
  props: CalendarOptions & {
    ref?: Ref<Calendar>;
  },
) => {
  const [ref, slitedProps] = splitProps(props, ["ref"]);
  let divCalendar!: HTMLDivElement;
  const [calendar, setCalendar] = createSignal<Calendar>();

  onMount(() => {
    const calendar = new Calendar(divCalendar, {
      ...slitedProps,
    });
    calendar.render();
    if (typeof ref.ref === "function") {
      ref?.ref?.(calendar);
    }
    setCalendar(calendar);
  });

  createEffect(() => {
    const newCalendar = calendar();
    if (newCalendar) {
      newCalendar.resetOptions({
        ...props,
      });
    }
  });

  return (
    <div>
      <div ref={divCalendar} />
    </div>
  );
};
export default SolidCalendar;
