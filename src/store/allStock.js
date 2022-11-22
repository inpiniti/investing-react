import * as allStockAPI from '../api/allStock'
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from '../lib/asyncUtils'

const POST = "allStock/POST"
const GET = "allStock/GET"
const DELETE = "allStock/DEL"

// 전체 종목 조회하기
const GET_ALL_STOCK = 'GET_ALL_STOCK'; // 요청 시작
const GET_ALL_STOCK_SUCCESS = 'GET_ALL_STOCK_SUCCESS'; // 요청 성공
const GET_ALL_STOCK_ERROR = 'GET_ALL_STOCK_ERROR'; // 요청 실패

// 액션 함수
export const post = createPromiseThunk(GET_ALL_STOCK, allStockAPI.getAllStock);
export const get = (stock) => ({ type: GET, value: stock });
export const del = (stock) => ({ type: DELETE, value: stock });

// 초기화
const initialState = reducerUtils.initial();

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
export default function allStock(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STOCK:
    case GET_ALL_STOCK_SUCCESS:
    case GET_ALL_STOCK_ERROR:
      return handleAsyncActions(GET_ALL_STOCK, "data")(state, action);
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