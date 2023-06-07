import { useState } from "react";

export const useVisibility = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const show = () => {
    setIsVisible(true);
  };

  const hidde = () => {
    setIsVisible(false);
  };

  return {
    isVisible,
    show,
    hidde,
  };
};
