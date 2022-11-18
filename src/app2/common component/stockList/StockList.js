import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './StockList.module.css';
import Stock from "./stock/Stock";
import Card from "../Card";
import Grid from "../Grid";
import Scroll from "../Scroll";

export default function StockList({type = 1, stocklist}) {

  return (
    <>
      <Card cardType={2} className='h-100'>
        <Scroll className='h-100'>
          <Grid gridType={type}>
            {stocklist && stocklist.map(investing => (
              <Stock investing={investing} key={investing.stock}/>
            ))}
          </Grid>
        </Scroll>
      </Card>
    </>
  );
}