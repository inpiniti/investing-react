import React from "react";
import Chart from "./Chart";

export default {
  title: "Chart",
  component: Chart,
};

export const Default = () => <Chart/>;
export const netIncome = () => <Chart type="netIncome"/>;
export const eps = () => <Chart type="eps"/>;
export const dividendPerShare = () => <Chart type="dividendPerShare"/>;
export const sales = () => <Chart type="sales"/>;
export const operatingProfit = () => <Chart type="operatingProfit"/>;