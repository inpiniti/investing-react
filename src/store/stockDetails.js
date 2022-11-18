const POST = "stockDetails/POST";
const DELETE = "stockDetails/DEL";

export const post = (stockDetails) => ({ type: POST, value: stockDetails });
export const del = (stockDetails) => ({ type: DELETE, value: stockDetails });

const initialState = [];

export default function stockDetails(state = initialState, action) {
  switch (action.type) {
    case POST:
      return action.value;
     case DELETE:
      return state.filter(value => value !== action.value);
     default:
      return state;
  }
}