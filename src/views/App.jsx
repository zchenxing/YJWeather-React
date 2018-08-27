import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import Main from './main'
import store from '../redux/store'
import '../assets/less/reset.less'

const history = createHistory()

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path='/' component={Main} />
                    <Redirect to='/' />
                </Switch>
            </Router>
        </Provider>
    
    );
  }
}

export default App;
