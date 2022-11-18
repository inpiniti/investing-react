import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './SearchBar.module.css';

export default function SearchBar() {

  return (
    <>
      <Form>
        <Row>
          <Col lg={10}>
            <Form.Control type="email" placeholder="Enter email" />
          </Col>
          <Col lg={2} className="pl-1">
            <Button className="w-100" variant="primary" type="submit">
              검색
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}