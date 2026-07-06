export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

export function summarizeWeather(cities) {
  if (!cities.length) {
    return {
      total: 0,
      avgTemp: 0,
      uniqueConditions: 0,
    }
  }

  const total = cities.length
  const avgTemp = cities.reduce((sum, city) => sum + city.temp, 0) / total
  const uniqueConditions = new Set(cities.map((city) => city.condition)).size

  return {
    total,
    avgTemp,
    uniqueConditions,
  }
}
