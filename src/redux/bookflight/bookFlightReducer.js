/* eslint-disable no-case-declarations */
import { BOOKFLIGHT, BOOKINGDELETE, BOOKINGFULL } from "./actionTypes";


const initialState = {
   bookingFull: false,
   bookingData:[
   
   ]
}


export const flightReducer = (state=initialState, action)=> {
     // console.log(action.type);
    switch (action.type) {
    
        case BOOKFLIGHT:                 
             const newData = action.payload
             newData.id = state.bookingData.length
            return {
              ...state,
              bookingData: [...state.bookingData, newData],
              bookingFull: false,
            };        
        case BOOKINGFULL: 
            return {
                ...state,
                bookingFull:true
            };
        case BOOKINGDELETE:
            console.log( action.payload);
            const newDateAfterDelete = state.bookingData.filter((item)=> item.id !== action.payload)
            return {
              ...state,
              bookingData:newDateAfterDelete,
              bookingFull: false,
            };
        default:
            return {...state}
    }
}