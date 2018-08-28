import axios from 'axios'
import { WEATHER_KEY } from '../config'

const CITY_HOST = "https://search.heweather.com"
const WEATHER_HOST = "https://free-api.heweather.com/s6"

let Client = {

    getCity: (url) => {

        let reg = /\?/
        let params = reg.test(url) ? `&key=${WEATHER_KEY}` : `/key=${WEATHER_KEY}`

        return new Promise((resolve, reject) => { 
            axios.get(CITY_HOST + url + params)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
        })
    },


    getWeath: (url) => {

        let reg = /\?/
        let params = reg.test(url) ? `&key=${WEATHER_KEY}` : `/key=${WEATHER_KEY}`

        return new Promise((resolve, reject) => { 
            axios.get(WEATHER_HOST + url + params)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
        })
    },
}


export default Client