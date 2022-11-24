import ListGroup from 'react-bootstrap/ListGroup'

/* 사용자 정의 */
import MangerItem from './item/MangerItem'

import styles from './Manager.module.css';
import {useEffect, useState} from "react";

export default function Manger() {

  const [learnedFiles, setLearnedFiles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL_LEARNING_PREDICTION}/learnedFiles`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLearnedFiles(data);
      })
      .catch((e) => {
        console.error(e);
        setLearnedFiles([]);
      });
  }, []);

  return (
    <>
      <div className={`${styles.body}`}>
        <div className={`${styles.managerTitle}`}>나의 iPhone</div>
        <ListGroup>
          {learnedFiles.map(learnedFile => (
            <MangerItem learnedFile={learnedFile}/>
          ))}
        </ListGroup>
      </div>
    </>
  );
}