import * as types from './action/action-type'

const weatherReducer = (state = {}, action) => {

    switch (action.type) {
        case types.WEATHER_DATA:
            return {
                weather: action.dataSource
            }    

        default:
            return state
    }
}


export default weatherReducer;