import { SEARCH_VALUE } from "../CONSTANT";
let initialState: string = "";
interface actionTemplate {
  type: string;
  payload: string;
}
export function SearchReducers(state = initialState, action: actionTemplate) {
  switch (action.type) {
    case SEARCH_VALUE: 
      state = action.payload
      return state
    default: return state
  }
}
