import { useState } from "react";
import { getCurrentMonth } from "../utils/getCurrentMonth";

export function useMonth() {
  const currentMonth = getCurrentMonth();
  const [month, setMonth] = useState(currentMonth);
  
  const handleMonthChange = (e) => {
    const {value } = e.target;
    setMonth(value);
  }

  return {month, handleMonthChange};
}