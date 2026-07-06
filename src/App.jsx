import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { formatNumber, summarizeWeather } from './utils/formatters'

// Sample weather data - using mock data for demo
const mockWeatherData = [
  { id: 1, city: 'San Francisco', country: 'US', temp: 68, condition: 'Cloudy', humidity: 65 },
  { id: 2, city: 'New York', country: 'US', temp: 72, condition: 'Sunny', humidity: 55 },
  { id: 3, city: 'Seattle', country: 'US', temp: 62, condition: 'Rainy', humidity: 80 },
  { id: 4, city: 'Miami', country: 'US', temp: 85, condition: 'Sunny', humidity: 70 },
  { id: 5, city: 'Denver', country: 'US', temp: 75, condition: 'Clear', humidity: 45 },
  { id: 6, city: 'Chicago', country: 'US', temp: 65, condition: 'Cloudy', humidity: 60 },
  { id: 7, city: 'Boston', country: 'US', temp: 58, condition: 'Rainy', humidity: 75 },
  { id: 8, city: 'Phoenix', country: 'US', temp: 105, condition: 'Sunny', humidity: 20 },
  { id: 9, city: 'Portland', country: 'US', temp: 70, condition: 'Cloudy', humidity: 65 },
  { id: 10, city: 'Austin', country: 'US', temp: 88, condition: 'Sunny', humidity: 50 },
  { id: 11, city: 'London', country: 'UK', temp: 59, condition: 'Rainy', humidity: 70 },
  { id: 12, city: 'Tokyo', country: 'JP', temp: 77, condition: 'Sunny', humidity: 65 },
]

function App() {
  const [cities, setCities] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [conditionFilter, setConditionFilter] = useState('all')
  const [minTemp, setMinTemp] = useState('')
  const [maxTemp, setMaxTemp] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setCities(mockWeatherData)
      setLoading(false)
    }, 500)
  }, [])

  const filteredCities = useMemo(() => {
    const minTempValue = minTemp === '' ? null : Number(minTemp)
    const maxTempValue = maxTemp === '' ? null : Number(maxTemp)

    return cities.filter((city) => {
      const matchesTemp =
        (minTempValue === null || Number.isNaN(minTempValue) || city.temp >= minTempValue) &&
        (maxTempValue === null || Number.isNaN(maxTempValue) || city.temp <= maxTempValue)

      const matchesSearch = `${city.city} ${city.country}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      const matchesCondition = conditionFilter === 'all' || city.condition === conditionFilter

      return matchesSearch && matchesCondition && matchesTemp
    })
  }, [cities, searchTerm, conditionFilter, minTemp, maxTemp])

  const stats = useMemo(() => summarizeWeather(filteredCities), [filteredCities])

  return (
    <main className="dashboard-shell">
      <header className="hero-card">
        <div>
          <p className="eyebrow">Unit 5 Project 5</p>
          <h1>🌤 Global Weather Dashboard</h1>
          <p className="hero-copy">
            This dashboard surfaces weather data from around the world powered by WeatherBit.
            Search for a city, narrow by weather condition, and explore temperature ranges
            to discover weather patterns globally.
          </p>
        </div>
      </header>

      <section className="stats-grid" aria-label="Dashboard summary statistics">
        <article className="stat-card">
          <h2>{formatNumber(stats.total)}</h2>
          <p>Cities tracked</p>
        </article>
        <article className="stat-card">
          <h2>{stats.avgTemp.toFixed(1)}°F</h2>
          <p>Average temperature</p>
        </article>
        <article className="stat-card">
          <h2>{formatNumber(stats.uniqueConditions)}</h2>
          <p>Weather conditions</p>
        </article>
      </section>

      <section className="controls-card" aria-label="Filtering controls">
        <label className="field">
          <span>Search cities</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by city or country"
          />
        </label>

        <label className="field">
          <span>Filter by condition</span>
          <select value={conditionFilter} onChange={(event) => setConditionFilter(event.target.value)}>
            <option value="all">All conditions</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rainy">Rainy</option>
            <option value="Clear">Clear</option>
          </select>
        </label>

        <label className="field">
          <span>Min temperature</span>
          <input
            type="number"
            value={minTemp}
            onChange={(event) => setMinTemp(event.target.value)}
            placeholder="0°F"
          />
        </label>

        <label className="field">
          <span>Max temperature</span>
          <input
            type="number"
            value={maxTemp}
            onChange={(event) => setMaxTemp(event.target.value)}
            placeholder="100°F"
          />
        </label>
      </section>

      <section className="list-card" aria-label="City weather list">
        {loading && <p className="status">Loading weather data...</p>}
        {error && <p className="status error">{error}</p>}
        {!loading && !error && filteredCities.length === 0 && (
          <p className="status">No cities match those filters yet.</p>
        )}

        {!loading && !error && filteredCities.length > 0 && (
          <ul className="city-list">
            {filteredCities.map((city) => (
              <li key={city.id} className="city-item">
                <div>
                  <h3>{city.city}, {city.country}</h3>
                  <p>{city.condition}</p>
                </div>
                <div className="meta">
                  <span className="pill temp">{city.temp}°F</span>
                  <span>💧 {city.humidity}%</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default App
