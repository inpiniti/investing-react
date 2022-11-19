import styles from './BottomBar.module.css';
import Card from "../../common component/Card";
import StockList from "../../common component/stockList/StockList";
import interestingStock from "../../../store/interestingStock";
import {useSelector} from "react-redux";

export default function BottomBar() {

  const interestingStock = useSelector(state => state.interestingStock);

  return (
    <>
      <Card className="p-1">
        <StockList type={8} stocklist={interestingStock}/>
      </Card>
    </>
  );
}