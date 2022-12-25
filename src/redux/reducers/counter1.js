import { ADD, SUB, ADDNUM, SUBNUM, ADDASYNC } from "../actions/actionTypes";
const initState = {
  counter: 0,
};

export default function counter1(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        counter: state.counter + 1,
      };
    case SUB:
      return {
        counter: state.counter - 1,
      };
    case ADDNUM:
      return {
        counter: state.counter + action.payload,
      };
    case SUBNUM:
      return {
        counter: state.counter - action.payload,
      };
  }
  return state;
}
