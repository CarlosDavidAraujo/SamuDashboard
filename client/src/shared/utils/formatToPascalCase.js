export function formatToPascalCaseWithSpace(string) {
  return string.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}