import React, { Component } from 'react';
import { setWeatherData } from '../../redux/action'
import { connect } from 'react-redux'
import Now from './now'
import Tmp from './tmp'
import client from '../../restful'
import './weather.less'

import Plugins from '../../assets/javascript/plugins'

class Weather extends Component {

    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this._request()
    }


    _request() {
        client.getWeath('/weather?location=成都').then((res) => {

            let dataSource = res.HeWeather6[0]

            dataSource.hourly = dataSource.hourly.map((el) => {
                el.icon = Plugins.getWeatherIcon(el.cond_code, el.time)
                return el
            })

            dataSource.daily_forecast = dataSource.daily_forecast.map((el) => {
                el.icon_d = Plugins.getWeatherIcon(el.cond_code_d, '10:00')
                el.icon_n = Plugins.getWeatherIcon(el.cond_code_n, '22:00')
                return el
            })

            if(this.props.submitWeather) {
                this.props.submitWeather(res.HeWeather6[0])
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const bg_sun = `url(${require('../../assets/images/bg-sun.jpg')})`;
        const bg_night = `url(${require('../../assets/images/bg-night.jpg')})`;

        return (
            <div className='full-screen weather-bg' style={{backgroundImage: bg_sun}}>
                <Now />
                <Tmp />
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        weatherReducer: store.weatherReducer
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        submitWeather: (weather) => {
            dispatch(setWeatherData(weather))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather);