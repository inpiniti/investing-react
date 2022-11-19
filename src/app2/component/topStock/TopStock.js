import styles from './TopStock.module.css';
import Card from "../../common component/Card";
import SelectButton from "./selectButton/SelectButton";
import StockList from "../../common component/stockList/StockList";
import Grid from "../../common component/Grid";
import {useSelector} from "react-redux";

export default function TopStock() {

  // 구독
  const stocklist = useSelector(state => state.topStock);

  return (
    <>
      <Card className="p-1">
        <div style={{'height': '3rem'}}>
          <SelectButton/>
        </div>
        <div style={{'height': 'calc(100% - 3rem)'}}>
          <StockList type={1} stocklist={stocklist}/>
        </div>
      </Card>
    </>
  );
}