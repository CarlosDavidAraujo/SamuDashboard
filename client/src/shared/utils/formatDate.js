/**
 * Formata a data para o formato pt-BR.
 * @param {number} timestamp - O timestamp da data a ser formatada.
 * @returns {Object }Um objeto contendo as seguintes propriedades:
 *  - hour: a hora formatada (no formato "HH:MM:SS");
 *  - dateOnly: a data formatada (no formato "DD/MM/AAAA");
 *  - date: a data e hora formatadas (no formato "DD/MM/AAAA, HH:MM:SS").
 * Se o timestamp for nulo ou indefinido, retorna null.
 */
export function formatDate(timestamp) {
  if (!timestamp) {
    return null;
  }

  const tempDate = new Date(timestamp);
  const hour = tempDate.toLocaleTimeString("pt-BR");
  const dateOnly = tempDate.toLocaleDateString("pt-BR");
  const date = tempDate.toLocaleString("pt-BR");

  return { hour, dateOnly, date };
}
