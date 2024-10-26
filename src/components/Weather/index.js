import {Component} from 'react'
import './index.css'

class Weather extends Component {
  state = {weatherdata: [], city: '', tem: []}

  onchange = event => {
    this.setState({city: event.target.value})
  }

  getdata = async () => {
    const {city, weatherdata} = this.state
    const options = {method: 'GET'}
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e46427577352a131dd532d1addb71741`
    const response = await fetch(url, options)
    if (response.ok) {
      const formatted = await response.json()

      this.setState({weatherdata: formatted})
    }
  }

  render() {
    const {city, weatherdata, tem} = this.state
    console.log(weatherdata)
    return (
      <div className="maincon">
        <h1>Search weather by city name</h1>
        <div className="row">
          <div>
            <input onChange={this.onchange} type="search" value={city} />
            <button onClick={this.getdata}>Search</button>
          </div>
        </div>

        <div className="cen">
          <h1>Current weather of {city}</h1>
          <div>
            <p>Temperature</p>
            <p>{weatherdata.visibility}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Weather
