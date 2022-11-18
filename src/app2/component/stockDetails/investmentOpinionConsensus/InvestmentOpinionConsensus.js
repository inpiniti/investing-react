import styles from './InvestmentOpinionConsensus.module.css';
import Card from "../../../common component/Card";
import Scroll from "../../../common component/Scroll";
import Grid from "../../../common component/Grid";

export default function InvestmentOpinionConsensus({arg = {
  "targetPrice": "73,455",
  "investmentOpinion": "4.00",
  "eps": "3,487",
  "estimatedNumberOfOrgans": "22",
  "per": "14.43"
}}) {
  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          투자의견 컨센서스
        </div>
        <Scroll className="h-100-3">
          <Grid gridType={2}>
            <div className="color-8">투자의견 (5점만점)</div> <div>{arg.investmentOpinion}</div>
            <div className="color-8">목표주가(원)</div> <div>{arg.targetPrice}</div>
            <div className="color-8">EPS(원)</div> <div>{arg.eps}</div>
            <div className="color-8">PER(배)</div> <div>{arg.per}</div>
            <div className="color-8">추정기관수</div> <div>{arg.estimatedNumberOfOrgans}</div>
          </Grid>
        </Scroll>
      </Card>
    </>
  );
}