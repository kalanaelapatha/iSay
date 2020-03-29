import { combineReducers } from 'redux'
import configReducer from "./configReducer";





// Combines our two example reducers to create a root reducer
// reducers can be accessed as stste.reducer1, state.reducer2 after connecting the state to props
export default combineReducers({
    configReducer:configReducer
})
