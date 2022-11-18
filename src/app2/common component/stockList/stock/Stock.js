import styles from './Stock.module.css';
import Card from "../../Card";
import {useDispatch, useSelector} from "react-redux";
import {post} from "../../../../store/selected";

export default function Stock({ investing: i = {
  "createTime": "2022-10-18 15:10:00",
  "current": 1960,
  "high": 1990,
  "low": 1960,
  "changePrice": -10,
  "changeRate": 99.49,
  "tradingVolume": 12140,
  "tradeTime": "00:19:12",
  "score": 607,
  "stock": "경창산업",
  "a": 98,
  "b": 100,
  "d": "57"
}}) {

  const dispatch = useDispatch();
  const selectedPost = (data) => dispatch(post(data));
  const stockClick = () => selectedPost(i.stock);

  const selected = useSelector(state => state.selected);

  return (
    <>
      <Card cardType={selected == i.stock ? 6 : 3} className="p-1" hover onClick={stockClick}>
        <div className="font-1-25 color-c">
          {i.stock}
        </div>
        <div className={styles.stockWrap}>
          <div>
            <div className={styles.winRateWrap}>
              <div className={styles.current}>
                {i.current}
              </div>
              <div className="color-8">
                원
              </div>
            </div>
            <div className={styles.winRateWrap}>
              <div className="pr-0-5 color-8">
                전일 대비
              </div>
              <div className={styles.current}>
                {i.changePrice}
              </div>
            </div>
          </div>
          <div className={styles.winRateWrap}>
            <div className={styles.winRate}>
              {i.d}
            </div>
            <div className="color-8">
              %
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}