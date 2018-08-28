import React, { Component } from 'react';
import { connect } from 'react-redux'

class Now extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tmp_icon: require('assets/images/icon/tmp.png'),
            hum_icon: require('assets/images/icon/hum.png'),
            wind_icon: require('assets/images/icon/wind-dir.png')
        }
    }
    

    render() {
        let data = this.props.weatherReducer.weather ? this.props.weatherReducer.weather : null;
        let wind_deg = data ? data.now.wind_deg : 0

        return (
            <div className='weather-now'>
                <p className='weather-now__tmp'>
                    <span>{data ? data.now.tmp+'°' : ''}</span>
                    <span  className='weather-now__cond'>{data ? data.now.cond_txt : '' }</span>
                </p>
                <div className='weather-other'>
                    <img src={this.state.tmp_icon} alt=""/>
                    <span>
                        {data ? `${data.daily_forecast[0].tmp_min}°~${data.daily_forecast[0].tmp_max}°`: ''}
                    </span>
                    <img  style={{transform: `rotate(${wind_deg}deg)`}} src={this.state.wind_icon} alt=""/>
                    <span>
                        {data ? `${data.now.wind_sc}级`: ''}
                    </span>
                    <img src={this.state.hum_icon} alt=""/>
                    <span>
                        {data ? `${data.now.hum}%` : ''}
                    </span>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        weatherReducer: store.weatherReducer
    }
}

export default connect(mapStateToProps)(Now);