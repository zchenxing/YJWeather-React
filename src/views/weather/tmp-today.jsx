import React, { Component } from 'react';
import { connect } from 'react-redux'
import Plugins from '../../assets/javascript/plugins'

class TodayTmp extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {

        let hourly = this.props.weatherReducer.weather ? this.props.weatherReducer.weather.hourly : []

        return (
            <div className="weather-tmp__hourly">
            {
                hourly.map((item, key) => {
                    return(
                        <div key={key} className="weather-tmp__item weather-today">
                            <p className='tmp-item__tmp'>{item.tmp}°</p>
                            <p className='tmp-item__cond'>{item.cond_txt}</p>
                            <img src={item.icon} className='tmp-item__icon' />
                            <p className='tmp-item__wind'>{item.wind_dir}</p>
                            <p className='tmp-item__wind'>{item.wind_sc}级</p>
                            <div className='tmp-item__time'>
                                <p>{Plugins.coverNowTime(item.time)}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        );
    }
}


const mapStrteToProps = (store) => {
    return {
        weatherReducer: store.weatherReducer
    }
}


export default connect(mapStrteToProps)(TodayTmp);