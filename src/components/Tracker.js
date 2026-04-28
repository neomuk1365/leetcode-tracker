import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Tracker() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const username = "neomuk1365"; // 🔥 apna username yaha rakho

    fetch(`https://leetcode-backend-lbx6.onrender.com/leetcode/${username}`)
      .then((res) => res.json())
      .then((data) => {
        const formatted = Object.keys(data).map((date) => ({
          title: `${data[date]} ✅`,
          date: date,
          count: data[date],
        }));

        setEvents(formatted);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // 🎨 Color logic
  const getColor = (count) => {
    if (!count || count === 0) return "#ef4444";   // red
    if (count <= 3) return "#facc15";              // yellow
    return "#22c55e";                              // green
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

          // 🔥 Custom UI for each day
          eventContent={(info) => {
            const count = info.event.extendedProps.count;

            return (
              <div
                style={{
                  backgroundColor: getColor(count),
                  borderRadius: "6px",
                  padding: "4px",
                  textAlign: "center",
                  color: "#000",
                  fontWeight: "bold"
                }}
              >
                {count} ✅
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}