import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './FlexWrapperRow.module.css';

export default function FlexWrapperRow({ children, h100 }) {
  const H100 = h100 ? 'h-100' : '';

  return (
    <>
      <div className={`${styles.flexWrapperRow} ${H100}`}>
        { children }
      </div>
    </>
  );
}