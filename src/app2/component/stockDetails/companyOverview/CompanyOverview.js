import styles from './CompanyOverview.module.css';
import Card from "../../../common component/Card";
import Scroll from "../../../common component/Scroll";
import Grid from "../../../common component/Grid";

export default function CompanyOverview({arg = {
  "website": "http://www.samsung.com/sec",
  "bank": "우리은행 (삼성센터)",
  "address": "경기도 수원시 영통구 삼성로 129(매탄동)",
  "transfer": "한국예탁결제원",
  "phone": "031-200-1114 (주식담당: 031-200-1114)",
  "establishmentDate": "1969/01/13 (상장일: 1975/06/11)",
  "auditor": "안진회계법인",
  "ceo": "한종희, 경계현",
  "affiliate": "삼성",
  "employees": "117,904 (2022/06)",
  "issued": "5,969,782,550 주 / 822,886,700 주"
}}) {

  return (
    <>
      <Card cardType={2}>
        <div className="p-1">
          기업개요
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