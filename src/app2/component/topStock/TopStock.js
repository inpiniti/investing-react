import styles from './TopStock.module.css';
import Card from "../../common component/Card";
import SelectButton from "./selectButton/SelectButton";
import StockList from "../../common component/stockList/StockList";
import Grid from "../../common component/Grid";

export default function TopStock() {

  return (
    <>
      <Card className="p-1">
        <div style={{'height': '3rem'}}>
          <SelectButton/>
        </div>
        <div style={{'height': 'calc(100% - 3rem)'}}>
          <StockList type={1}/>
        </div>
      </Card>
    </>
  );
}