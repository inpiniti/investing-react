import styles from './App2.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App2.css';

import Crontab from "reactjs-crontab";

import AllStock from "./app2/component/allStock/AllStock";
import StockDetails from "./app2/component/stockDetails/StockDetails";
import TopStock from "./app2/component/topStock/TopStock";
import BottomBar from "./app2/component/bottomBar/BottomBar";
import TopBar from "./app2/component/topBar/TopBar";
import Grid from "./app2/common component/Grid";
import {useDispatch, useSelector} from "react-redux";
import  {post} from './store/allStock';

function App2() {

  const dispatch = useDispatch();
  const allStockPost = (data) => dispatch(post(data));

  const getAllStock = () => {
    fetch('http://113.131.152.55:5000/test2')
      .then(res => {
        return res.json();
      })
      .then(data => {
        if(data == {}) {
          allStockPost(data);
        } else {
          allStockPost(JSON.parse(data));
        }
      })
      .catch(() => {
        console.error('getAllStock error');
      })
    ;
  }

  const tasks = [
    {
      fn: getAllStock, // this is the function which is triggered based on the config
      id: "getAllStock",
      config: "* * * * *", // runs at every minutes
      name: "", // optional
    },
  ];

  return (
    <>
      <Crontab
        tasks={tasks}
        timeZone='UTC'
        dashboard={{ hidden: false }}
      />
      <div className={`${styles.layout}`}>
        <Grid gridType={'layout'} className="h-100">
          <div style={{'grid-area': '1 / 1 / span 1 / span 3'}}>
            <TopBar/>
          </div>
          <div style={{'grid-row': '2 / span 2'}}>
            <AllStock/>
          </div>
          <StockDetails/>
          <TopStock/>
          <div style={{'grid-area': '3 / 2 / span 1 / span 2'}}>
            <BottomBar/>
          </div>
        </Grid>
      </div>
    </>
  );
}

export default App2;
