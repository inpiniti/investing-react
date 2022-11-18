import ListGroup from 'react-bootstrap/ListGroup'

/* 사용자 정의 */
import MangerItem from './item/MangerItem'

import styles from './Manager.module.css';
import {useEffect, useState} from "react";

export default function Manger() {

  const [learnedFiles, setLearnedFiles] = useState([]);

  useEffect(() => {
    fetch('http://113.131.152.55:5000/learnedFiles')
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