import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER } from "./Type";

export const CounterIncrement = () =>{
    return {
        type: INCREMENT_COUNTER
    };
}

export const CounterDecrement = () =>{
    return {
        type: DECREMENT_COUNTER
    };
}

export const CounterClear = () => {
  return {
    type: CLEAR_COUNTER
  };
}

export const CounterSet = (receivednumber) => {
 return {
    type: SET_COUNTER,
    payload: receivednumber
 };
}