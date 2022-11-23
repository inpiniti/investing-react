import styles from './BottomBar.module.css';
import Card from "../../common component/Card";
import StockList from "../../common component/stockList/StockList";
import interestingStock from "../../../store/interestingStock";
import {useSelector} from "react-redux";

export default function BottomBar() {
  // 관심 종목 구독
  const interestingStock = useSelector(state => state.interestingStock);

  return (
    <>
      <Card className="p-1 h-100">
        <StockList type={7} stocklist={interestingStock.data}/>
      </Card>
    </>
  );
}