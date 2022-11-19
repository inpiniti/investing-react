import { combineReducers } from "redux";
import selected from "./selected";
import allStock from "./allStock";
import stockDetails from "./stockDetails";
import topStock from "./topStock";
import interestingStock from "./interestingStock";

const rootReducer = combineReducers({
  selected,
  allStock,
  stockDetails,
  topStock,
  interestingStock,
});

export default rootReducer;