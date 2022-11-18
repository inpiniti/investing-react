import React from "react";
import Card from "./Card";

export default {
  title: "common/Card",
  component: Card,
};

export const Default = () => <Card>Default</Card>;
export const Card2 = () => <Card cardType={2}>cardType 2</Card>;
export const Card3 = () => <Card cardType={3}>cardType 3</Card>;
export const Card4 = () => <Card cardType={4}>cardType 4</Card>;
