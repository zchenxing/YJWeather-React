import React, { Component } from 'react';
import { setWeatherData, setAirData } from '../../redux/action'
import { connect } from 'react-redux'
import Now from './tmp/now'
import Tmp from './tmp/tmp'
import Air from './air/air'
import Life from './life/life'
import client from '../../restful'
import './weather.less'

import Plugins from 'assets/javascript/plugins'

class Weather extends Component {

    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this._tmpRequest();
        this._airRequest();
    }


    _tmpRequest() {
        client.getWeath('/weather?location=成都').then((res) => {

            let weath = res.HeWeather6[0]

            weath.hourly = weath.hourly.map((el) => {
                el.icon = Plugins.getWeatherIcon(el.cond_code, el.time)
                return el
            })

            weath.daily_forecast = weath.daily_forecast.map((el) => {
                el.icon_d = Plugins.getWeatherIcon(el.cond_code_d, '10:00')
                el.icon_n = Plugins.getWeatherIcon(el.cond_code_n, '22:00')
                return el
            })

            if(this.props.submitWeather) {
                this.props.submitWeather(weath)
            }

        }).catch((err) => {
            console.log(err)
        })
    }

    _airRequest() {
      
        client.getWeath('/air?location=成都').then(res => {
            let air = res.HeWeather6[0]
            if(this.props.submitAir) {
                this.props.submitAir(air)
            }
        }).catch(err => { 
            console.log(err)
        })
    }

    render() {
        let bg_img = `url(${require('assets/images/bg-sun.jpg')})`;
        let time = new Date().getHours()

        if (time >= 18 || time <= 7) {
            bg_img = `url(${require('assets/images/bg-night.jpg')})`
        }

        return (
            <div className='full-screen weather'>
                <div className='weather-bg' style={{backgroundImage: bg_img}}></div>
                <Now />
                <Tmp />
                <Air />
                <Life />
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
        },
        submitAir: (air) => {
            dispatch(setAirData(air))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weather);