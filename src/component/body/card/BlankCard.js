import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BootstrapCard from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

import styles from './Card.module.css';

export default function BlankCard({ investing: i }) {
  return (
    <>
      <BootstrapCard className={`${styles.card} ${styles.blankCard}`}>
        <BootstrapCard.Body>
          <BootstrapCard.Subtitle className={`${styles.subtitle} ${styles.blankColer}`}>00:00:00 전 데이터</BootstrapCard.Subtitle>
          <BootstrapCard.Title className={`${styles.title} ${styles.blankCardTitle} ${styles.blankColer}`}>관심있는 주식을 추가해 주세요.</BootstrapCard.Title>
          <Row>
            <Col md={4}>
              <Col className={`${styles.key} ${styles.blankColer}`}>시가</Col>
              <Col className={`${styles.value} ${styles.blankColer}`}>0</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key} ${styles.blankColer}`}>최저</Col>
              <Col className={`${styles.value} ${styles.low} ${styles.blankColer}`}>0</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key} ${styles.blankColer}`}>최고</Col>
              <Col className={`${styles.value} ${styles.high} ${styles.blankColer}`}>0</Col>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Col className={`${styles.key} ${styles.blankColer}`}>전일대비</Col>
              <Col className={`${styles.value} ${styles.blankColer}`}>0원</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key} ${styles.blankColer}`}>전일대비 비율</Col>
              <Col className={`${styles.value} ${styles.blankColer}`}>0%</Col>
            </Col>
            <Col md={4}>
              <Col className={`${styles.key} ${styles.blankColer}`}>거래량</Col>
              <Col className={`${styles.value} ${styles.blankColer}`}>0</Col>
            </Col>
          </Row>

          <ProgressBar className={`${styles.progressBar}`} now={0} label={`${0}%`} />
        </BootstrapCard.Body>
      </BootstrapCard>
    </>
  );
}