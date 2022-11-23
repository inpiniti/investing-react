import styles from './StockDetails.module.css';
import Card from "../../common component/Card";
import CompanyOverview from "./companyOverview/CompanyOverview";
import Chart from "./chart/Chart";
import InvestmentOpinionConsensus from "./investmentOpinionConsensus/InvestmentOpinionConsensus";
import MarketPriceAndShareholderStatus from "./marketPriceAndShareholderStatus/MarketPriceAndShareholderStatus";
import Grid from "../../common component/Grid";
import History from "./history/History";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import StatisticsDay from "./statistics/StatisticsDay";
import Statistics from "./statistics/Statistics";
import {useEffect, useState} from "react";
import {getInterestingStock} from "../../../store/interestingStock";
import userDataStorage from "../../../store/userDataStorage";

export default function StockDetails() {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  // 구독
  const stockDetails = useSelector(state => state.stockDetails);

  // 버튼 클릭
  const interestingStockAdd = () => {
    console.log('userData', userData)
    console.log('stockDetails.status.name', stockDetails.status.name)

    // add UserData
    setUserData(oldArray => {
      const newArray = [...oldArray, stockDetails.status.name]
      console.log('newArray', newArray)

      // set 저장소
      userDataStorage.set(newArray).catch(console.error);
      patch(newArray)
      return newArray
    })
  }

  // 패치
  const patch = (newArray) => dispatch(getInterestingStock(newArray))

  // 초기화
  useEffect(() => {
    // get 저장소
    userDataStorage
      .get(userData)
      .then(setUserData)
      .catch(console.error);
  }, [])

  return (
    <>
      <Card className="p-1">
        <div style={{'height': '3rem'}}>
          <Button variant="primary" type="submit" onClick={interestingStockAdd}>관심종목 추가</Button>
        </div>
        <div style={{'height': 'calc(100% - 3rem)'}}>
          <Grid gridType={4} className='h-100 p-0'>
            <MarketPriceAndShareholderStatus arg={stockDetails && stockDetails.status}/>{/*시세 및 주주현황*/}
            <CompanyOverview arg={stockDetails && stockDetails.summary}/>{/*기업개요*/}
            <InvestmentOpinionConsensus arg={stockDetails && stockDetails.opinion}/>{/*투자의견 컨센서스*/}
            <History arg={stockDetails && stockDetails.history}/>
            <StatisticsDay arg={stockDetails && stockDetails.day}/>
            <Statistics arg={stockDetails && stockDetails.month3} type="month3"/>
            <Statistics arg={stockDetails && stockDetails.month12} type="month12"/>
            <Statistics arg={stockDetails && stockDetails.year3} type="year3"/>
            <Statistics arg={stockDetails && stockDetails.year10} type="year10"/>
            <Chart type="sales" arg={stockDetails && stockDetails.financials}/>{/*차트*/}
            <Chart type="operatingProfit" arg={stockDetails && stockDetails.financials}/>{/*차트*/}
            <Chart type="debtRatio" arg={stockDetails && stockDetails.financials}/>{/*차트*/}
            <Chart type="netIncome" arg={stockDetails && stockDetails.financials}/>{/*차트*/}
            <Chart type="eps" arg={stockDetails && stockDetails.financials}/>{/*차트*/}
            <Chart type="dividendPerShare" arg={stockDetails && stockDetails.financials}/>{/*차트*/}
          </Grid>
        </div>
      </Card>
    </>
  );
}