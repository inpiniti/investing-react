import styles from './Statistics.module.css';
import Card from "../../../common component/Card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Statistics({arg = {
  "code": "035720",
  "infoType": "item",
  "periodType": "month",
  "stockExchangeType": "KRX",
  "newlyListed": false,
  "decimalUnit": 0,
  "priceInfos": [
    {
      "lowPrice": 80500,
      "highPrice": 83200,
      "openPrice": 83000,
      "localDate": "20220816",
      "closePrice": 80700,
      "accumulatedTradingVolume": 1798225,
      "foreignRetentionRate": 28.89
    },
    {
      "lowPrice": 79600,
      "highPrice": 81200,
      "openPrice": 80800,
      "localDate": "20220817",
      "closePrice": 80100,
      "accumulatedTradingVolume": 1041971,
      "foreignRetentionRate": 28.87
    },
  ]
}, type = 'month3'}) {

  const typeName = {
    'month3':'3개월',
    'month12':'1년',
    'year3':'3년',
    'year10':'10년',
  };

  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          {typeName[type]}
        </div>
        <div className="h-100-3 min-h-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={arg.priceInfos}
              margin={{
                top: 1,
                right: 8,
                left: 8,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="localDate" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="closePrice" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </>
  );
}