import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BootstrapCard from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

import styles from './SmallCard.module.css';

export default function SmallCard({ investing: i, isTitle: isTitle }) {
  return (
    <>
      <BootstrapCard className={`${styles.card}`}>
        <BootstrapCard.Body className={`${styles.body}`}>
          <Row className={`${styles.row}`}>
            <Col xs={1} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>확률</div>) :
                (<ProgressBar className={`${styles.progressBar}`} now={i.d} label={`${i.d}`} />) }
            </Col>
            <Col xs={2} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>종목명</div>):
                (<Col className={`${styles.title}`}>{i.stock}</Col>) }
            </Col>
            <Col xs={2} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>시간 전</div>) :
                (<Col className={`${styles.subtitle}`}>{i.tradeTime}</Col>) }
            </Col>
            <Col xs={1} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>시가</div>) :
                (<Col className={`${styles.value}`}>{i.current}</Col>) }
            </Col>
            <Col xs={1} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>최저</div>) :
                (<Col className={`${styles.value} ${styles.low}`}>{i.low}</Col>) }
            </Col>
            <Col xs={1} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>최고</div>) :
                (<Col className={`${styles.value} ${styles.high}`}>{i.high}</Col>) }
            </Col>
            <Col xs={1} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>전일</div>) :
                (<Col className={`${styles.value}`}>{i.changePrice}</Col>) }
            </Col>
            <Col xs={1} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>전일</div>) :
                (<Col className={`${styles.value}`}>{(i.changeRate-100).toFixed(1)}%</Col>) }
            </Col>
            <Col xs={2} className={`${styles.col}`}>
              { isTitle ?
                (<div className={`${styles.key}`}>거래량</div>) :
                (<Col className={`${styles.value}`}>{i.tradingVolume}</Col>) }
            </Col>
          </Row>
        </BootstrapCard.Body>
      </BootstrapCard>
    </>
  );
}