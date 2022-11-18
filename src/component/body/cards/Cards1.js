import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';

import SmallCard from '../card/SmallCard';
import {post} from "../../../store/selected";

import { useDispatch } from "react-redux";

import styles from './Cards.module.css';

export default function Cards1() {

  const [investings, setInvestings] = useState([]);

  useEffect(() => {
    const dispatchInvesting = () => {
      const IS_STOCK_MARKET_TIME = new Date().toLocaleTimeString('en-US', { hour12: false });
      if(IS_STOCK_MARKET_TIME > '09:00:00' &&
        IS_STOCK_MARKET_TIME < '15:30:00'
      ) {
        fetch('http://113.131.152.55:5000/test2')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setInvestings(JSON.parse(data));
          })
          .catch(() => {
            console.error('/test2');
            setInvestings([]);
          })
        ;
      } else {
        setInvestings([]);
      }
    }

    dispatchInvesting();
    const interval = setInterval(() => {
      dispatchInvesting();
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  //const dispatch = useDispatch();

  const onClickCard = (stockName) => {
    //dispatch(post(stockName));
  }

  return (
    <>
      <h5>
        <Badge bg="secondary">모든 주식</Badge>
      </h5>
      <SmallCard investing={null} isTitle={true} />
      {investings.length === 0 ?
        (<div className={`${styles.center}`}><Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner></div>) :
        (
          investings.map(investing => (
            <div onClick={() => onClickCard(investing.stock)} key={investing.stock}>
              <SmallCard investing={investing} isTitle={false}/>
            </div>
          ))
        )
      }
    </>
  );
}