import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'

import styles from './Logo.module.css';

export default function Logo() {

  return (
    <>
      <div>
        <FontAwesomeIcon icon={faApple} /> Apple
      </div>
    </>
  );
}