import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

const investing = {
  "createTime": "2022-10-18 15:10:00",
  "current": 1960,
  "high": 1990,
  "low": 1960,
  "changePrice": -10,
  "changeRate": 99.49,
  "tradingVolume": 12140,
  "tradeTime": "00:19:12",
  "score": 607,
  "stock": "경창산업",
  "a": 98,
  "b": 100,
  "d": "57"
};

export const Default = () => <Card investing={investing}/>;