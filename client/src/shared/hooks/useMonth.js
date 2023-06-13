import { useState } from "react";
import { getCurrentMonth } from "../utils/getCurrentMonth";

/**
 * Hook personalizado para gerenciar o estado do mês selecionado.
 * @returns {{month: String, handleMonthChange: Function}} Um objeto contendo o valor do mês e uma função para alterar o valor do mes.
 */
export function useMonth() {
  const currentMonth = getCurrentMonth();
  const [month, setMonth] = useState(currentMonth);
  
  const handleMonthChange = (e) => {
    const {value } = e.target;
    setMonth(value);
  }

  return {month, handleMonthChange};
}