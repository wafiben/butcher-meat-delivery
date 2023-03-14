import { ADD_PODUCT } from "../types";
const initState = { singleProduct: {}, list: [] };
const listReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PODUCT:
      return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
};

export default listReducer;
