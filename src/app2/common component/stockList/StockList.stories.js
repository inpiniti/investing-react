import React from "react";
import StockList from "./StockList";

export default {
  title: "common/StockList",
  component: StockList,
};

export const Default = () => <StockList/>;
export const StockList2 = () => <StockList type={2}/>;