import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {del} from "../../../store/selected";
import Card from "../card/Card";
import Badge from "react-bootstrap/Badge";

import BlankCard from "../card/BlankCard";

export default function Cards1() {

  const [investings, setInvestings] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // 구독
  const selectedStock = useSelector(state => state.selected);

  useEffect(() => {
    const dispatchInvesting = () => {
      if(selectedStock.length !== 0) {
        fetch(`${process.env.REACT_APP_API_URL_LEARNING_PREDICTION}/test4?`+ new URLSearchParams({
          data: selectedStock.join(),
        }))
          .then(res => {
            setLoading(false);
            return res.json();
          })
          .then(data => {
            setInvestings(JSON.parse(data));
          })
          .catch(() => {
            console.error('/test4');
            setInvestings([]);
          })
        ;
      }
    }

    setLoading(true);
    dispatchInvesting();
    const interval = setInterval(() => {
      console.log('cards2');
      dispatchInvesting();
    }, 10 * 2000);
    return () => clearInterval(interval);
  }, [selectedStock])

  const onClickCard = (stockName) => {
    dispatch(del(stockName));
  }

  return (
    <>
      <h5>
        <Badge bg="secondary">관심 있는 주식</Badge>
      </h5>
      { selectedStock.length === 0 &&
        <BlankCard/>
      }
      { loading && selectedStock.length !== 0 &&
        <BlankCard/>
      }
      { selectedStock.length !== 0 &&
        investings.map(investing => (
          <div onClick={() => onClickCard(investing.stock)} key={investing.stock}>
            <Card investing={investing}/>
          </div>
        ))
      }
    </>
  );
}