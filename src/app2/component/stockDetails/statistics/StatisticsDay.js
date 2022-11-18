import styles from './Statistics.module.css';
import Card from "../../../common component/Card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StatisticsDay({arg = {
  "code": "035720",
  "stockExchangeType": "KRX",
  "newlyListed": false,
  "tradeStop": false,
  "lastClosePrice": 58500,
  "openPrice": 58500,
  "lastTradeBaseAt": "20221114",
  "localDateTimeNow": "20221115084600",
  "priceInfos": [],
  "hasVolume": true,
  "tradeBaseAt": "20221115",
  "infoType": "item",
  "periodType": "day",
  "lastPriceInfos": [
    {
      "localDateTime": "20221114114800",
      "currentPrice": 58900,
      "accumulatedTradingVolume": 3987266
    },
    {
      "localDateTime": "20221114114900",
      "currentPrice": 58800,
      "accumulatedTradingVolume": 3989501
    },
  ]
}, type = 'debtRatio'}) {

  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          1일
        </div>
        <div className="h-100-3 min-h-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={arg.lastPriceInfos}
              margin={{
                top: 1,
                right: 8,
                left: 8,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="localDateTime" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="currentPrice" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </>
  );
}