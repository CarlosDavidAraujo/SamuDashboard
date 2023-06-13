/**
 * Obtém o mês e ano atuais
 * @returns {String} A data atual no formato YYYY-MM
 */
export function getCurrentMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  return `${year}-${month}`;
}