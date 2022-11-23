import * as interestingStockAPI from "../api/interestingStock";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

const GET = "interesting/GET";
const DELETE = "interesting/DEL";

// 관심 종목 조회하기
const GET_INTERESTING_STOCK = 'GET_INTERESTING_STOCK'; // 요청 시작
const GET_INTERESTING_STOCK_SUCCESS = 'GET_INTERESTING_STOCK_SUCCESS'; // 요청 성공
const GET_INTERESTING_STOCK_ERROR = 'GET_INTERESTING_STOCK_ERROR'; // 요청 실패

// 액션 함수
export const getInterestingStock = interestingArr => createPromiseThunk(GET_INTERESTING_STOCK, interestingStockAPI.getInterestingStock)(interestingArr);
export const get = (stock) => ({ type: GET, value: stock });
export const del = (stock) => ({ type: DELETE, value: stock });

// 초기화
const initialState = reducerUtils.initial();

// 비동기 관련 액션들을 처리하는 리듀서를 만들어줍니다.
export default function interestingStock(state = initialState, action) {
  switch (action.type) {
    case GET_INTERESTING_STOCK_SUCCESS:
    case GET_INTERESTING_STOCK_ERROR:
      return handleAsyncActions(GET_INTERESTING_STOCK)(state, action);
    default:
      return state;
  }
}