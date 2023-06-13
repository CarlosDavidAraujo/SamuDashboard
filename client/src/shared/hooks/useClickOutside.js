import { useEffect } from "react";
import { useRef } from "react";

/**
 * Hook personalizado para detectar cliques fora de um elemento específico.
 * @param {Function} callback - Função a ser chamada quando ocorrer um clique fora do elemento.
 * @returns {Object} Uma referência ao elemento DOM que está sendo monitorado.
 */
export function useClickOutside(callback) {
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ref;
}
