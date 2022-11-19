import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import {useDispatch} from "react-redux";
import {post} from "../../../../store/topStock";

import styles from './SelectButton.module.css';
import {useState} from "react";
import useFetch from "../../../../hooks/useFetch";

export default function SelectButton() {
  const dropdownList = [
    "네이버 검색상위 종목",
    "네이버 인기토론",
    "네이버 인기뉴스",
  ];
  const apiList = [
    "http://113.131.152.55:5000/naver/popular",
    "http://113.131.152.55:5000/naver/discussion",
    "http://113.131.152.55:5000/naver/news",
  ];
  const [title, setTitle] = useState(dropdownList[0]);
  const [loading, setLoading] = useState(false);

  const dropdownClick = (index) => {
    setTitle(dropdownList[index]);
    TopStockPost(index);
  }

  // 패치
  const dispatch = useDispatch();
  const TopStockPost = async (index) => {
    const result = await fetchCall(index)
    console.log(result)
    dispatch(post(result));
  }

  const fetchCall = async (index) => {
    const url = apiList[index]
    setLoading(true)
    const result = await fetch(url)
      .then(res => {
        return res.json();
      })
    setLoading(false)
    return JSON.parse(result);
  }

  return (
    <>
      <div>
        {loading ?
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            /> {title}
            <span className="visually-hidden">Loading...</span>
          </Button>
        :
          <DropdownButton id="dropdown-item-button" title={title}>
            {dropdownList.map((dropdown, index) => (
              <Dropdown.Item onClick={() => dropdownClick(index)} key={index}>{dropdown}</Dropdown.Item>
            ))}
          </DropdownButton>
        }
      </div>
    </>
  );
}