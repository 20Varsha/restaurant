import{
    RESSTAURANT_LIST_REQUEST,
    RESSTAURANT_LIST_SUCCESS,
    RESSTAURANT_LIST_FAIL
}from '../constants/restaurantConstants'
import axios from 'axios'


export const listRestaurants=() =>async(dispatch)=>{
    try{
        dispatch({type:RESSTAURANT_LIST_REQUEST})
const{data}=await axios.get('/restaurants.json')


dispatch({
    type:RESSTAURANT_LIST_SUCCESS,payload:data.restaurants
})

catch(error){n
dispatch({
    type:RESSTAURANT_LIST_FAIL,payload:error
})
}

