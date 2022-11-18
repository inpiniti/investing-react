import React from "react";
import Statistics from "./Statistics";
import StatisticsDay from "./StatisticsDay"

export default {
  title: "Statistics",
  component: Statistics,
};

export const day = () => <StatisticsDay/>;
export const month3 = () => <Statistics type="month3"/>;
export const month12 = () => <Statistics type="month12"/>;
export const year3 = () => <Statistics type="year3"/>;
export const year10 = () => <Statistics type="year10"/>;