import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'

export default function MangerItem({learnedFile : fileName}) {

  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          {fileName}
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
    </>
  );
}