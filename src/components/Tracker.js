import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Tracker() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/leetcode/neomuk1365")
      .then(res => res.json())
      .then(data => {
        const formatted = Object.keys(data).map(date => ({
          title: `${data[date]} ✅`,
          date: date
        }));
        setEvents(formatted);
      });
  }, []);

  return (
    <div className="section tracker-bg">
      <h2>LeetCode Tracker</h2>

      <div className="calendar glass">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="70vh"
        />
      </div>
    </div>
  );
}