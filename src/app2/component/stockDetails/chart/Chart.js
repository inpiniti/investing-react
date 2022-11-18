import styles from './Chart.module.css';
import Card from "../../../common component/Card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({arg = [
  {
    "date": "2021-12-01",
    "debtRatio": 67.62,
    "dividendPerShare": 53,
    "netIncome": 224076355000,
    "eps": 172,
    "roe": 0.0082,
    "sales": 1785730056000,
    "operatingProfit": 106587982000
  },
  {
    "date": "2020-12-01",
    "debtRatio": 60.94,
    "dividendPerShare": 150,
    "netIncome": -195490145080,
    "eps": -428,
    "roe": -0.0298,
    "sales": 1235149357720,
    "operatingProfit": 149658784210
  },
  {
    "date": "2019-12-01",
    "debtRatio": 52.21,
    "dividendPerShare": 127,
    "netIncome": -441935055000,
    "eps": -995,
    "roe": -0.08,
    "sales": 847588674000,
    "operatingProfit": 79581915000
  },
  {
    "date": "2018-12-01",
    "debtRatio": 41.45,
    "dividendPerShare": 127,
    "netIncome": -28639167790,
    "eps": -2,
    "roe": -0.0002,
    "sales": 673344599600,
    "operatingProfit": 4293000920
  }
], type = 'debtRatio'}) {

  const typeName = {
    'debtRatio':'부채비율',
    'netIncome':'당기순이익',
    'eps':'EPS',
    'dividendPerShare':'현금DPS',
    'sales':'매출액',
    'operatingProfit':'영업이익',
  };

  const inBillions = (arr) => Array.from(arr, e => {
    if(type == 'netIncome' || type == 'sales' || type == 'operatingProfit') {
      e[type] = e[type]/100000000;
    }
    return e;
  });

  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          {typeName[type]}
        </div>
        <div className="h-100-3 min-h-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={inBillions(arg).reverse()}
              margin={{
                top: 1,
                right: 8,
                left: 8,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey={type} stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </>
  );
}