import styles from './MarketPriceAndShareholderStatus.module.css';
import Card from "../../../common component/Card";
import Scroll from "../../../common component/Scroll";
import Grid from "../../../common component/Grid";

export default function MarketPriceAndShareholderStatus({arg = {
  "symbolCode": "A035720",
  "code": "KR7035720002",
  "openingPrice": 49500.0,
  "highPrice": 50600.0,
  "lowPrice": 48950.0,
  "tradePrice": 50300.0,
  "prevClosingPrice": 50100.0,
  "change": "RISE",
  "changePrice": 200.0,
  "changeRate": 0.003992016,
  "name": "카카오",
  "date": "2022-11-04",
  "tradeDate": "20221104",
  "tradeTime": "180026",
  "exchangeDate": "2022-11-04 18:00:26",
  "exchangeCountry": "KOREA",
  "securityGroup": "STOCK",
  "market": "KOSPI",
  "isIndex": false,
  "accTradePrice": 160664859900,
  "accTradeVolume": 3222930,
  "prevAccTradeVolume": 3572826,
  "prevAccTradeVolumeChangeRate": 0.9020674390524476,
  "marketCap": 22399679548300.0,
  "marketCapRank": 13,
  "high52wPrice": 131000.0,
  "high52wDate": "2021-11-05",
  "low52wPrice": 46500.0,
  "low52wDate": "2022-10-17",
  "basePrice": 50100.0,
  "upperLimitPrice": 65100.0,
  "lowerLimitPrice": 35100.0,
  "foreignRatio": 27.31,
  "prevForeignRatio": -0.082,
  "foreignOwnShares": 121203883,
  "parValue": 100.0,
  "eps": 3132,
  "dps": 53,
  "per": 15.99,
  "bps": 23018,
  "pbr": 2.18,
  "sectorCode": "026",
  "sectorName": "서비스업",
  "sectorChangeRate": 0.0032099323,
  "wicsSectorCode": "G502050",
  "wicsSectorName": "양방향미디어와서비스",
  "wicsSectorChangeRate": -0.0027968104,
  "investorSummary": {
    "individualStraightPurchasePrice": 22059734000,
    "institutionStraightPurchasePrice": -4271704000,
    "foreignStraightPurchasePrice": -18180599000,
    "programStraightPurchasePrice": -30652168041
  },
  "changeStatistics": null,
  "chartImageUrl": {
    "day": "https://t1.daumcdn.net/finance/chart/kr/daumstock/d/A035720.png",
    "month": "https://t1.daumcdn.net/finance/chart/kr/daumstock/m/A035720.png",
    "month3": "https://t1.daumcdn.net/finance/chart/kr/daumstock/m3/A035720.png",
    "year": "https://t1.daumcdn.net/finance/chart/kr/daumstock/y/A035720.png",
    "year3": "https://t1.daumcdn.net/finance/chart/kr/daumstock/y3/A035720.png"
  },
  "currency": "KRW",
  "exchange": null,
  "earlyYearPrice": null,
  "lastWeekPrice": null,
  "listedShareCount": 445321661,
  "sectorPer": 15.87149,
  "listingDate": "2017-07-10",
  "settleMonth": 12,
  "high50dPrice": 67300.0,
  "low50dPrice": 46500.0,
  "highInYearPrice": 117000.0,
  "lowInYearPrice": 46500.0,
  "capitalStock": 44582166100.0,
  "bidPrice": 50200,
  "askPrice": 50300,
  "companySummary": "국내 시장 점유율 1위 메신저 카카오톡을 중심으로 커머스, 모빌리티, 페이, 게임, 뮤직, 콘텐츠 등 다양한 영역에서 수익을 창출하고 있음. 매출은 플랫폼 부문 52.3%, 콘텐츠 부문 47.7%로 구성됐음.\n신규 사업에 지속 투자하고 있음. 카카오엔터프라이즈를 통해 B2B 행보를 본격화할 계획이며 카카오브레인은 기술 트렌드 센서 역할을 하고 있음.\n2022년 4월에는 디지털헬스케어 사업 본격화를 위해 카카오헬스케어를 출범함.\n\n",
  "stockState": {
    "isBackDoorListed": false,
    "marketWarning": "NONE",
    "isTradingSuspended": false,
    "parValueChange": "NONE",
    "isUnfaithfulDisclosureDesignated": false,
    "ex": "NONE",
    "isAdministrativeIssue": false,
    "revaluation": "NONE",
    "isPreDelistingTrading": false,
    "isLowLiquidity": false
  },
  "chartSlideImage": null,
  "debtRatio": 67.173,
  "sales": 1822314722000.0,
  "operatingProfit": 171021546000.0,
  "preTaxProfit": 19961,
  "netIncome": 101202768000.0,
  "signedChangeRate5daysAgo": 0.0317948718,
  "signedChangeRate20daysAgo": -0.0821167883,
  "signedChangeRate60daysAgo": -0.3805418719,
  "signedChangeRate120daysAgo": -0.4110070258,
  "signedChangeRate250daysAgo": -0.5992031873,
  "prevClosingPrice5daysAgo": 48750.0,
  "prevClosingPrice20daysAgo": 54800.0,
  "prevClosingPrice60daysAgo": 81200.0,
  "prevClosingPrice120daysAgo": 85400.0,
  "prevClosingPrice250daysAgo": 125500.0,
  "timestamp": 1667554391958,
  "isClosing": true
}}) {

  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          시세 및 주주 현황
        </div>
        <Scroll className="h-100-3">
          <Grid gridType={2}>
            <div className="color-8">기업명</div> <div>{arg.name}</div>
            <div className="color-8">market</div> <div>{arg.market}</div>
            <div className="color-8">WICS</div> <div>{arg.wicsSectorName}</div>
            <div className="color-8">업종</div> <div>{arg.sectorName}</div>
            <div className="color-8">PES</div> <div>{arg.eps}</div>
            <div className="color-8">BPS</div> <div>{arg.bps}</div>
            <div className="color-8">PER</div> <div>{arg.per}</div>
            <div className="color-8">종가(원)</div> <div>{arg.prevClosingPrice}</div>
            <div className="color-8">52주 최고 / 52주 최저</div> <div>{arg.high50dPrice} / {arg.low52wPrice}</div>
            <div className="color-8">액명가(원)</div> <div>{arg.per}</div>
            <div className="color-8">거래량 / 거래량변동률</div> <div>{arg.prevAccTradeVolume} / {arg.prevAccTradeVolumeChangeRate}</div>
            <div className="color-8">발행주식수(주)</div> <div>{arg.listedShareCount}</div>
            <div className="color-8">외국인지분율(%)</div> <div>{arg.foreignRatio}</div>
          </Grid>
        </Scroll>
      </Card>
    </>
  );
}