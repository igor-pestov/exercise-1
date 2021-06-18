import React, { useEffect, useState } from "react";
import "./index.css";

interface IDate {
  date: Date,
}
export const App: React.FC<Object> = () => {
  const [time, setTime] = useState<IDate>({
    date: new Date(),
  })
  useEffect(() => {
    const timer = setInterval(() => {
      setTime({
        date: new Date(),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [])
  
  return (
    <div className="card">
      <h1 className="entry-title">{time.date.toLocaleTimeString()} {time.date.getHours() > 12 ? 'PM' : 'AM' }</h1>
    </div>
  );
};
