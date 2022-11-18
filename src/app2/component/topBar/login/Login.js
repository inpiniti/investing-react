import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import styles from './Login.module.css';

export default function Login() {

  return (
    <>
      <div>
        <FontAwesomeIcon icon={faRightToBracket} /> login
      </div>
    </>
  );
}