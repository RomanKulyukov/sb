import { ADD, SUB, ADDNUM, SUBNUM, ADD2 } from "../actions/actionTypes";

export function add() {
  return { type: ADD };
}
export function sub() {
  return { type: SUB };
}
export function addNum(num) {
  return { type: ADDNUM, payload: num };
}
export function subNum(num) {
  return { type: SUBNUM, payload: num };
}
export function add2(num) {
  return { type: ADD2, payload: num };
}
export function asyncAdd(num) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNum(num));
    }, 3000);
  };
}
