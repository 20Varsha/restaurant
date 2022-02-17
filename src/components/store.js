
import {createstore,combaineReducers,applyMiddleware} from '/redux'
import thunk from 'redux-thunk'
import { restaurantListReducer } from '../reducers/restaurantReducer';

const reducers=combaineReducers({
restaurantReducer:restaurantListReducer
})


const initialState={};
const middleware=[thunk];


const store=createstore(reducers,initialState,applyMiddleware(...middleware));

export default store


