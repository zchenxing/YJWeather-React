import React, { Component } from 'react'
import {Route, Redirect, Switch, Link} from 'react-router-dom'
import TodayTmp from './tmp-today'
import WeekTmp from './tmp-week'

import './tmp.less'

class Tmp extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className='weather-tmp'>
                <div className='weather-tmp__switch'>
                    <Link to='/weather/today-tmp' style={{opacity: /today-tmp/.test(window.location.pathname) ? 1 : .6}}>
                        今天
                    </Link>
                    <Link to='/weather/week-tmp' style={{opacity: /today-tmp/.test(window.location.pathname) ? .6 : 1}}>
                        最近三天
                    </Link>

                </div>
                <Switch>
                    <Route path='/weather/today-tmp' component={TodayTmp}  />
                    <Route path='/weather/week-tmp' component={WeekTmp} />
                    <Redirect to='/weather/today-tmp' />
                </Switch>
                
            </div>
        );
    }
}

export default Tmp;