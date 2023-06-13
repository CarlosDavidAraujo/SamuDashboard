import { useState } from "react";

/**
 * Hook para controle de visibilidade.
 * @param {boolean} initialState - Estado inicial de visibilidade (padrão: false).
 * @returns {{isVisible: Boolean, show: Function, hidde: Function,}} Array contendo o estado de visibilidade, função para exibir e função para ocultar.
 */
export function useVisibility(initialState = false) {
  const [isVisible, setIsVisible] = useState(initialState);

  /**
   * Função para exibir o elemento.
   */
  const show = () => {
    setIsVisible(true);
  };

  /**
   * Função para ocultar o elemento.
   */
  const hidde = () => {
    setIsVisible(false);
  };

  return {isVisible, show, hidde};
};
