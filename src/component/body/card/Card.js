import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BootstrapCard from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

import styles from './Card.module.css';

export default function Card({ investing: i }) {
  return (
    <>
      <BootstrapCard className={`${styles.card}`}>
        <BootstrapCard.Body>
          <BootstrapCard.Subtitle className={`${styles.subtitle}`}>{i.tradeTime} 전 데이터</BootstrapCard.Subtitle>
          <BootstrapCard.Title className={`${styles.title}`}>{i.stock}</BootstrapCard.Title>
          <Row>
            <Col md={4}>
              <Col className={`${styles.key}`}>시가</Col>
              <Col className={`${styles.value}`}>{i.current}</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key}`}>최저</Col>
              <Col className={`${styles.value} ${styles.low}`}>{i.low}</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key}`}>최고</Col>
              <Col className={`${styles.value} ${styles.high}`}>{i.high}</Col>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Col className={`${styles.key}`}>전일대비</Col>
              <Col className={`${styles.value}`}>{i.changePrice}원</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key}`}>전일대비 비율</Col>
              <Col className={`${styles.value}`}>{i.changeRate}%</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key}`}>거래량</Col>
              <Col className={`${styles.value}`}>{i.tradingVolume}</Col>
            </Col>
          </Row>

          <ProgressBar className={`${styles.progressBar}`} now={i.d} label={`${i.d}%`} />
        </BootstrapCard.Body>
      </BootstrapCard>
    </>
  );
}