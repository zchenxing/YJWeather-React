import * as types from './action/action-type'

const weatherReducer = (state = {}, action) => {
    

    switch (action.type) {
        case types.WEATHER_DATA:
            return {
                ...state,
                weather: action.dataSource
            }
        case types.AIR_DATA:
            return {
                ...state,
                air: action.air
            }    

        default:
            return state
    }
}


export default weatherReducer;