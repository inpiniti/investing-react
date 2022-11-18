import styles from './History.module.css';
import Card from "../../../common component/Card";
import Scroll from "../../../common component/Scroll";
import Grid from "../../../common component/Grid";

export default function History({arg = {
  "2022/06/30": "세계 최초 3나노 GAA 파운드리 양산",
  "2022/04/20": "경영진 변동 : 사외이사 한화진 사임",
  "2022/03/19": "경영진 변동 : 사외이사 박재완 임기만료 또는 해임, 사외이사 안규리 임기만료 또는 해임",
  "2022/05/17": "경영진 변동 : 사외이사 박병국 퇴임",
  "2022/03/16": "대표이사 변동 : 대표이사 경계현 선임"
}}) {

  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          최근연혁
        </div>
        <Scroll className="h-100-3">
          <Grid gridType={2}>
            {Object.keys(arg).map((key) => (
              <>
                <div className="color-8">{key}</div> <div>{arg[key]}</div>
              </>
            ))}
          </Grid>
        </Scroll>
      </Card>
    </>
  );
}