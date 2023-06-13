/**
 * Formata a string de modo que todas as palavras iniciam com letras maiúsculas
 * @param {String} string 
 * @returns {String} string fortamatada
 */
export function formatToPascalCaseWithSpace(string) {
  return string.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}