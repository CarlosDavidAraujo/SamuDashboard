export function formatDate(timestamp) {
  if (!timestamp) {
    return null
  }

  const tempDate = new Date(timestamp);
  const hour = tempDate.toLocaleTimeString("pt-BR");
  const dateOnly = tempDate.toLocaleDateString("pt-BR");
  const date = tempDate.toLocaleString("pt-BR");

  return {hour, dateOnly, date};
}
