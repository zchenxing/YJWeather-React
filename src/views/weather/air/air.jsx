import React, { Component } from 'react';
import { connect } from 'react-redux'
import plugins from 'assets/javascript/plugins'
import './air.less'

class Air extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            rank: [
                {num:0, color: '#76BA51'},
                {num:50, color: '#E3B151'},
                {num:100, color: '#FB9B5D'},
                {num:150, color: '#F07754'},
                {num:200, color: '#A94258'},
                {num:250, color: '#7A203D'},
                {num:300, color: '#50131e'},
            ],
            detail: [
                {name: '一氧化碳', unit: 'mg/m³', en: 'CO', value: ''},
                {name: '二氧化氮', unit: 'μg/m³', en: 'NO2', value: ''},
                {name: '臭氧', unit: 'μg/m³', en: 'O₃', value: ''},
                {name: '可吸入颗粒', unit: 'μg/m³', en: 'PM10', value: ''},
                {name: '可入肺颗粒', unit: 'μg/m³', en: 'PM2.5', value: ''},
                {name: '二氧化硫', unit: 'μg/m³', en: 'SO2', value: ''},
            ],
            screenWidth: window.screen.width
        }
    }
    
    
    render() {

        let air = this.props.weatherReducer.air ? this.props.weatherReducer.air.air_now_city : null
        let index = 0, color = plugins.aqiColor(0), detail = [...this.state.detail];
        if(air) {
            let aqi = air.aqi >= 350 ? 350 : air.aqi
            index = (this.state.screenWidth - 40)/350 * aqi;
            color = plugins.aqiColor(aqi)

            let a = this.state.detail.map((el, index) => {
                if(index === 0) {
                    el.value = air.co
                } 
                else if(index === 1) {
                    el.value = air.no2
                }
                else if(index === 2) {
                    el.value = air.o3
                }
                else if(index === 3) {
                    el.value = air.pm10
                }
                else if(index === 4) {
                    el.value = air.pm25
                }
                else if(index === 5) {
                    el.value = air.so2
                }
                return el
            })

            detail = [...a]
        }

        return (
            <div className='weather-air'>
                <div className='cross'></div>
                <p>今日空气质量</p>
                <div className="air-section">
                    {
                        this.state.rank.map((item, key) => {
                            return (
                                <div key={key}>
                                    <div className='air-target'>{item.num}</div>
                                    <div className='air-color' style={{backgroundColor: item.color}}></div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='air-arrows'>
                    <div className='air-arrows__block' style={{left: index + 'px'}}>
                        <div className='air-arrows__triangle' style={{borderBottom: `${color} 20px solid`}}></div>
                        <div className='air-arrows__circle' style={{background: color}}>
                            {air ? air.aqi : 0}
                        </div>
                    </div>
                </div>

                <div className='air-detail'>
                    {
                        detail.map((item, key) => {
                            return (
                                <div key={key} className={key%2 != 0 ? 'air-datail__item' : 'air-datail__item air-datail__item-right'}>
                                    <p className='air-datail__en'>{item.en}</p>
                                    <p className='air-datail__value'>{item.value}</p>
                                    <p className='air-datail__name'>{item.name}</p>
                                    <p className='air-datail__unit'>{item.unit}</p>
                                </div>
                            )
                        })
                    }
                    <div className='clearfix'></div>
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

export default connect(mapStateToProps)(Air);