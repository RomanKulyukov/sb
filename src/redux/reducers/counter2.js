import { ADD2 } from "../actions/actionTypes";
const initState = {
  counter2: 200,
};

export default function counter2(state = initState, action) {
  switch (action.type) {
    case ADD2:
      return {
        counter2: state.counter2 + action.payload,
      };
  }
  return state;
}
