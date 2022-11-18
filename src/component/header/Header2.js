import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Header2.module.css'

export default function Header() {
  return (
    <Container className={`${styles.header}`}>
      <Row>
        <Col md={10}>Owners inpiniti Team</Col>
        <Col md={2}>
          2022.10.16
        </Col>
      </Row>
      <Row>
        <Col md={10} className={`${styles.title}`}>Mobile Design</Col>
        <Col md={2}>
          Updated 4 min ago
        </Col>
      </Row>
    </Container>
  );
}