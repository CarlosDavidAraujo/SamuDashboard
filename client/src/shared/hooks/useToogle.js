import { useState } from "react";

/**
 * Hook para controle de toogle (funcionalidade de alternar um estado)
 * @param {Boolean} initialState Estado inicial (padrão igual a falso)
 * @returns {[state, toggle]} Um Array contendo o estado e uma função que controla a alternancia do estado
 */
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
}

export default useToggle;
