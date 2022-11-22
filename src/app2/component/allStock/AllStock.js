import styles from './AllStock.module.css';
import Card from "../../common component/Card";
import SearchBar from "./searchBar/SearchBar";
import StockList from "../../common component/stockList/StockList";
import {useSelector} from "react-redux";

export default function AllStock() {

  // 구독
  const stocklist = useSelector(state => state.allStock);

  return (
    <>
      <Card className='h-100 p-1'>
        <div style={{'height': '3rem'}}>
          <SearchBar/>
        </div>
        <div style={{'height': 'calc(100% - 3rem)'}}>
          <StockList type={2} stocklist={stocklist.data}/>
        </div>
      </Card>
    </>
  );
}