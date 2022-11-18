const POST = "stock/POST";
const DELETE = "stock/DEL";

export const post = (stock) => ({ type: POST, value: stock });
export const del = (stock) => ({ type: DELETE, value: stock });

const initialState = [];

export default function selected(state = initialState, action) {
  switch (action.type) {
    case POST:
      return [...new Set([...state, action.value])];
     case DELETE:
      return state.filter(value => value !== action.value);
     default:
      return state;
  }
}