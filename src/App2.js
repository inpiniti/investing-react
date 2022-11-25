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
import  {getAllStock} from './store/allStock';
import  {getInterestingStock} from './store/interestingStock';
import {useEffect, useState} from "react";
import userDataStorage from "./store/userDataStorage";

function App2() {
  const [userData, setUserData] = useState([]);

  // 초기화
  useEffect(() => {
    // get 저장소
    userDataStorage
      .get()
      .then((newData) => {
        setUserData(old => {
          old.push(...newData)
        })
      })
      .catch(console.error);
  }, [])

  const dispatch = useDispatch();

  const dispatchAllStock = () => {
    dispatch(getAllStock())
  }
  const dispatchInterestingStock = () => {
    if(userData.length != 0)
      dispatch(getInterestingStock(userData))
  }

  const tasks = [
    {
      fn: dispatchAllStock, // this is the function which is triggered based on the config
      id: "getAllStock",
      config: "* * * * *", // runs at every minutes
    },
    {
      fn: dispatchInterestingStock, // this is the function which is triggered based on the config
      id: "getInterestingStock",
      config: "* * * * *", // runs at every minutes
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
