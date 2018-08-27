import axios from 'axios'

const CITY_HOST = "https://search.heweather.com"
const WEATHER_HOST = "https://free-api.heweather.com/s6"
const KEY = "cd8c2a3ffe1e42409fdd802bdaa0bb13"

let Client = {

    getCity: (url) => {

        let reg = /\?/
        let params = reg.test(url) ? `&key=${KEY}` : `/key=${KEY}`

        return new Promise((resolve, reject) => { 
            axios.get(CITY_HOST + url + params)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
        })
    },


    getWeath: (url) => {

        let reg = /\?/
        let params = reg.test(url) ? `&key=${KEY}` : `/key=${KEY}`

        return new Promise((resolve, reject) => { 
            axios.get(WEATHER_HOST + url + params)
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
        })
    },
}


export default Client