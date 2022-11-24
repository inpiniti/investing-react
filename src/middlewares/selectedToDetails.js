import {post} from "../store/stockDetails";

const selectedToDetails = store => next => action => {
  if(action.type == 'selected/POST'){
    fetch(`${process.env.REACT_APP_API_URL_DATA_COLLECTION}${process.env.REACT_APP_API_URL_DETAIL_DATA}?isuName=${action.value}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        store.dispatch(post(data));
        //dispatch(post(data));
      })
      .catch((e) => {
        console.error('selectedToDetails error');
        console.error(e);
      })
    ;
  }
  const result = next(action); // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
  return result; // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
};

export default selectedToDetails;