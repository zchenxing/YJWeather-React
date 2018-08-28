import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeekTmp extends Component {
    render() {

        let dailyForecast = this.props.weatherReducer.weather ? this.props.weatherReducer.weather.daily_forecast : []

        return (
            <div className='weather-tmp__week'>
             {
                dailyForecast.map((item, key) => {
                    return(
                        <div key={key} className="weather-tmp__item weather-week">
                         <div className='tmp-item__time'>
                                <p>{key === 0 ? '今天' : (key === 1 ? '明天' : '后天')}</p>
                                <p>{item.date.substring(5, 10)}</p>
                            </div>
                            <img src={item.icon_d} className='tmp-item__icon-week' />

                            <p className='tmp-item__tmp'>{item.tmp_max}°~{item.tmp_min}°</p>
                           
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


export default connect(mapStrteToProps)(WeekTmp);