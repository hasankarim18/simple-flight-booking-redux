import { BOOKFLIGHT, BOOKINGDELETE, BOOKINGFULL } from "./actionTypes";


export const addBooking = (details)=> {

    return {
      type: BOOKFLIGHT,
      payload: details
    };
}

export const bookingFull = ()=> {
  return {
    type:BOOKINGFULL,
   
  }
}


export const deleteBooking = (id)=> {
  
  return {
    type: BOOKINGDELETE,
    payload: id,
  };
}