import { combineReducers } from "redux";
import selected from "./selected";
import allStock from "./allStock";
import stockDetails from "./stockDetails";
import topStock from "./topStock";

const rootReducer = combineReducers({
  selected,
  allStock,
  stockDetails,
  topStock,
});

export default rootReducer;