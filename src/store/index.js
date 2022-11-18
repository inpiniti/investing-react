import { combineReducers } from "redux";
import selected from "./selected";
import allStock from "./allStock";
import stockDetails from "./stockDetails";

const rootReducer = combineReducers({
  selected,
  allStock,
  stockDetails,
});

export default rootReducer;