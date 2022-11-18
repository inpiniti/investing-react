import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';

import styles from './Header.module.css'

export default function Header() {
  return (
    <Container className={`${styles.header}`}>
      <Row>
        <Col className={`${styles.logo}`}>
          <Button variant="secondary" className={`${styles.mg}`}>
            <Link to={`/`} className={`${styles.link}`}>
              홈
            </Link>
          </Button>
          <Button variant="secondary">
            <Link to={`/manager`} className={`${styles.link}`}>
              관리자
            </Link>
          </Button>
        </Col>
        <Col>
          <Form.Control className={`${styles.formControl}`} type="text" placeholder="주식 검색" />
        </Col>
      </Row>
    </Container>
  );
}