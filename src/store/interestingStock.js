const POST = "interesting/POST";
const GET = "interesting/GET";
const DELETE = "interesting/DEL";

export const post = (stock) => ({ type: POST, value: stock });
export const get = (stock) => ({ type: GET, value: stock });
export const del = (stock) => ({ type: DELETE, value: stock });

const initialState = [];

export default function interesting(state = initialState, action) {
  switch (action.type) {
    case POST:
      return [...action.value];
     case DELETE:
      return state.filter(value => value !== action.value);
     default:
      return state;
  }
}