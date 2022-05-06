import {INCREMENT_COUNT,DECREMENT_COUNT,RESET_COUNT} from "./actionTypes"



const init = {
  counter: 0,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case INCREMENT_COUNT:
      return { ...state, counter: state.counter + payload };

    case DECREMENT_COUNT:
      return { ...state, counter: state.counter - payload };
    
    case RESET_COUNT:
      return { ...state, counter: 0};  

    default:
        return {...state}  
  }
};
export default reducer;
