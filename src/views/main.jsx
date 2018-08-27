import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Weather from './weather/weather'
import News from './news/news'


class Main extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <Switch>
                <Route path='/weather' component={Weather} />
                <Route path='/news' component={News} />
                <Redirect to='/weather'/>
            </Switch>
        );
    }
}

export default Main;