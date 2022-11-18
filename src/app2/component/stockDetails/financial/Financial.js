import styles from './Financial.module.css';
import Card from "../../../common component/Card";
import Scroll from "../../../common component/Scroll";
import Grid from "../../../common component/Grid";

export default function Financial({arg = [
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
]}) {

  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          재무재표
        </div>
        <Scroll className="h-100-3">
          <Grid gridType={2}>
            <div className="color-8">본사주소</div> <div>{arg.address}</div>
            <div className="color-8">홈페이지</div> <div>{arg.website}</div>
            <div className="color-8">대표전화</div> <div>{arg.phone}</div>
            <div className="color-8">설립일</div> <div>{arg.establishmentDate}</div>
            <div className="color-8">대표이사</div> <div>{arg.ceo}</div>
            <div className="color-8">계열</div> <div>{arg.affiliate}</div>
            <div className="color-8">종업원수</div> <div>{arg.employees}</div>
            <div className="color-8">발행주식수</div> <div>{arg.issued}</div>
            <div className="color-8">감사인</div> <div>{arg.auditor}</div>
            <div className="color-8">명의개서</div> <div>{arg.transfer}</div>
            <div className="color-8">주거래은행</div> <div>{arg.bank}</div>
          </Grid>
        </Scroll>
      </Card>
    </>
  );
}