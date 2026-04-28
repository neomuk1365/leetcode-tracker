import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Tracker() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // 🔥 Dummy Data (no backend needed)
    const data = {
      "2026-04-05": 3,
      "2026-04-06": 1,
      "2026-04-07": 5,
      "2026-04-10": 2,
      "2026-04-12": 6
    };

    const formatted = Object.keys(data).map(date => ({
      title: `${data[date]} ✅`,
      date: date,
      count: data[date]
    }));

    setEvents(formatted);
  }, []);

  // 🎨 Color logic
  const getColor = (count) => {
    if (count === 0) return "#ef4444";   // red
    if (count <= 3) return "#facc15";    // yellow
    return "#22c55e";                    // green
  };

  return (
    <div className="section tracker-bg">
      <h2>LeetCode Tracker</h2>

      <div className="calendar glass">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="70vh"

          // 🔥 CUSTOM UI INSIDE CALENDAR
          eventContent={(info) => {
            const count = info.event.extendedProps.count;

            return (
              <div
                style={{
                  backgroundColor: getColor(count),
                  borderRadius: "6px",
                  padding: "4px",
                  textAlign: "center"
                }}
              >
                <b>{count} ✅</b>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}