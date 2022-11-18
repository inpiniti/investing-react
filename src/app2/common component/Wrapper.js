import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Wrapper.module.css';

export default function Wrapper({ children }) {

  return (
    <>
      <div className={`${styles.wrapper}`}>
        { children }
      </div>
    </>
  );
}