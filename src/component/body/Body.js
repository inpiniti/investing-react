import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Cards1 from './cards/Cards1';

import styles from './Body.module.css';

export default function Body() {

  return (
    <>
      <div className={`${styles.body}`}>
        <Row>
          <Col md={12} className={`${styles.col}`}>
            <Cards1 />
          </Col>
          {/*<Col md={6} className={`${styles.col}`}>
            <Cards2 />
          </Col>*/}
        </Row>
      </div>
    </>
  );
}