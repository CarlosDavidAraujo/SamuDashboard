const statusColors = {
  'P': '#0099ff',
  'O': '#ffcc00',
  'L': '#32a81d',
}

export function getColorByVehicleStatus(status) {
  return statusColors[status]
}