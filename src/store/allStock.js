const POST = "allStock/POST";
const GET = "allStock/GET";
const DELETE = "allStock/DEL";

export const post = (stock) => ({ type: POST, value: stock });
export const get = (stock) => ({ type: GET, value: stock });
export const del = (stock) => ({ type: DELETE, value: stock });

const initialState = [];

export default function selected(state = initialState, action) {
  switch (action.type) {
    case POST:
      return [...action.value];
     case DELETE:
      return state.filter(value => value !== action.value);
    case GET:
      return state;
     default:
      return state;
  }
}