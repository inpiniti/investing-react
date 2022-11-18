import React from "react";
import Grid from "./Grid";
import Card from "./Card";


export default {
  title: "common/Grid",
  component: Grid,
};

export const Default = () =>
  <Card>
    <Grid>
      <Card cardType={2}>card1</Card>
      <Card cardType={2}>card2</Card>
      <Card cardType={2}>card3</Card>
      <Card cardType={2}>card4</Card>
      <Card cardType={2}>card5</Card>
      <Card cardType={2}>card6</Card>
      <Card cardType={2}>card7</Card>
      <Card cardType={2}>card8</Card>
    </Grid>
  </Card>;
export const Card2 = () =>
  <Card>
    <Grid gridType={2}>
      <Card cardType={2}>card1</Card>
      <Card cardType={2}>card2</Card>
      <Card cardType={2}>card3</Card>
      <Card cardType={2}>card4</Card>
      <Card cardType={2}>card5</Card>
      <Card cardType={2}>card6</Card>
      <Card cardType={2}>card7</Card>
      <Card cardType={2}>card8</Card>
    </Grid>
  </Card>;
export const Card3 = () =>
  <Card>
    <Grid gridType={3}>
      <Card cardType={2}>card1</Card>
      <Card cardType={2}>card2</Card>
      <Card cardType={2}>card3</Card>
      <Card cardType={2}>card4</Card>
      <Card cardType={2}>card5</Card>
      <Card cardType={2}>card6</Card>
      <Card cardType={2}>card7</Card>
      <Card cardType={2}>card8</Card>
    </Grid>
  </Card>;
export const Card4 = () =>
  <Card>
    <Grid gridType={4}>
      <Card cardType={2}>card1</Card>
      <Card cardType={2}>card2</Card>
      <Card cardType={2}>card3</Card>
      <Card cardType={2}>card4</Card>
      <Card cardType={2}>card5</Card>
      <Card cardType={2}>card6</Card>
      <Card cardType={2}>card7</Card>
      <Card cardType={2}>card8</Card>
    </Grid>
  </Card>;
