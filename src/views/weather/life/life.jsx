import React, { Component } from 'react';
import { connect } from 'react-redux'
import plugins from 'assets/javascript/plugins'
import './life.less'

class Life extends Component {

    constructor(props) {
        super(props);
    }
    
    
    render() {

        let lifestyle = this.props.weatherReducer.weather ? this.props.weatherReducer.weather.lifestyle : []

        return (
            <div className='weather-life'>
                <div className='cross'></div>
                <h4>今日生活指数</h4>
                {
                    lifestyle.map((el, key) => {
                        return (
                            <div key={key} className='weather-life__item'>
                                <h6>{plugins.liseStyleName(el.type)}：{el.brf}</h6>
                                <p>{el.txt}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        weatherReducer: store.weatherReducer
    }
}

export default connect(mapStateToProps)(Life);