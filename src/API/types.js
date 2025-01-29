/**
 * @typedef {Object} Coordinates
 * @property {number} lat
 * @property {number} lon
 */

/**
 * @typedef {Object} GeocodingResponse
 * @property {string} name
 * @property {Object.<string, string>} [local_names]
 * @property {number} lat
 * @property {number} lon
 * @property {string} country
 * @property {string} [state]
 */

/**
 * @typedef {Object} WeatherCondition
 * @property {number} id
 * @property {string} main
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef {Object} WeatherData
 * @property {Coordinates} coord
 * @property {WeatherCondition[]} weather
 * @property {Object} main
 * @property {number} main.temp
 * @property {number} main.feels_like
 * @property {number} main.temp_min
 * @property {number} main.temp_max
 * @property {number} main.pressure
 * @property {number} main.humidity
 * @property {Object} wind
 * @property {number} wind.speed
 * @property {number} wind.deg
 * @property {Object} sys
 * @property {number} sys.sunrise
 * @property {number} sys.sunset
 * @property {string} sys.country
 * @property {string} name
 * @property {number} dt
 */

/**
 * @typedef {Object} ForecastData
 * @property {Array<{
*   dt: number,
*   main: WeatherData["main"],
*   weather: WeatherData["weather"],
*   wind: WeatherData["wind"],
*   dt_txt: string
* }>} list
* @property {Object} city
* @property {string} city.name
* @property {string} city.country
* @property {number} city.sunrise
* @property {number} city.sunset
*/

export default {};
