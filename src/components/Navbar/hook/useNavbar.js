import  { useState, useEffect } from "react";

export const useNavbar = () => {
  const [navbarState, setNavbarState] = useState({
    dayName: "",
    monthName: "",
    date: "",
    year: "",
    time: "",
  });

  useEffect(() => {
    const getCurrentTime = () => {
      const currentDate = new Date();

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = daysOfWeek[currentDate.getDay()];

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthName = months[currentDate.getMonth()];

      const date = currentDate.getDate();
      const year = currentDate.getFullYear();
      const time = currentDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      setNavbarState({ dayName, monthName, date, year, time });
    };

    getCurrentTime();

    const timer = setInterval(getCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);
  return navbarState;
};
