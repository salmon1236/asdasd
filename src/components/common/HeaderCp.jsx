// HeaderCp.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import menuData from "../../assets/data/menu.json";

import ImgAtm from "../atoms/ImgAtm";
import logoImg from "../../assets/images/toplogo.png";

const HeaderCp = ({ openResMenu, setOpenResMenu }) => {
  // console.log(props);

  console.log(logoImg);
  console.log(menuData);
  const menuLists = menuData.data;
  console.log(menuLists);
  const [menu, setMenu] = useState([]);

  // const [openResMenu, setOpenResMenu] = useState(false);

  const handleClick = () => {
    setOpenResMenu(!openResMenu);
  };

  // [] : 의존성이 없는 경우 최초 시작시 데이터를 구성한다.
  useEffect(() => {
    setMenu(menuData.data);
    console.log(menu); // [] 처럼 초기값인 이유 : 동시진행되는 성질
  }, []);

  useEffect(() => {
    console.log(menu); // [menu] 처럼 의존성이 존재하는 경우 : menu의 상태가 변경되면 useEffect가 작동을 한다
  }, [menu]);

  return (
    <header className="h-60 d-flex justify-content-between align-items-center position-relative">
      <div className="logo d-flex">
        <Link to="/">
          <ImgAtm srcProps={logoImg} altProps={"National Geographic Logo"} />
        </Link>
      </div>
      {/* <div className={openResMenu ? "menu active" : "menu"}> */}
      <div className={clsx(`menu`, `${openResMenu ? "active" : ""}`)}>
        <ul className="d-flex">
          {menu?.map((v, i) => (
            <li key={v.name} className="mx-10">
              <Link to={v.link}>{v.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mypage ">
        <ul className="d-flex">
          <li className="mx-10">
            <button></button>
          </li>
          <li className="mx-10">
            <button></button>
          </li>
        </ul>
      </div>

      {/* <div
        className={
          openResMenu
            ? "resBtn position-absolute d-flex justify-content-center align-items-center active"
            : "resBtn position-absolute d-flex justify-content-center align-items-center"
        }
        onClick={handleClick}
      > */}
      <div
        className={clsx(
          "resBtn position-absolute d-flex justify-content-center align-items-center",
          `${openResMenu ? "active" : ""}`
        )}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
export default HeaderCp;
