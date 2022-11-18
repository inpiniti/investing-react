import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import styles from './SelectButton.module.css';
import {useState} from "react";

export default function SelectButton() {
  const dropdownList = [
    "네이버 검색상위 종목",
    "네이버 거래량 급증",
    "다음 인기검색",
    "다음 인기토론"
  ];
  const [title, setTitle] = useState(dropdownList[0]);

  const dropdownClick = (index) => setTitle(dropdownList[index]);

  return (
    <>
      <div>
        <DropdownButton id="dropdown-item-button" title={title}>
          {dropdownList.map((dropdown,index) => (
            <Dropdown.Item onClick={() => dropdownClick(index)} key={index}>{dropdown}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </>
  );
}