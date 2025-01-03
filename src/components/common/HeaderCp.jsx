import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import menuData from "../../assets/data/menu.json"

import ImgAtm from "../atoms/ImgAtm"
import logoImg from "../../assets/images/toplogo.png"

const HeaderCp = () => {
  console.log(menuData);
  const menuLists = menuData.data;
  console.log(menuLists)

  const [menu, setMenu] = useState([])
  // [] : 의존성이 없는 경우 최초 시작시 데이터를 구성한다.
  useEffect(() => {
    setMenu(menuData.data)
  console.log(menu); // [] 처럼 초기값인 이유 : 동시 진행되는 성질
  }, []);

  useEffect(() => {
    console.log(menu); // [menu] 처럼 의존성이 존재하는 경우 : menu의 상태가 변경되면 useEffectr가 작동을 한다
  }, [menu])

  return (
    <header className="h-60 d-flex justify-content-between align-items-center position-relative">
      <div className="logo d-flex">
        <Link>
          <ImgAtm srcProps={logoImg} altProps={"National Geographic Logo"}></ImgAtm>
        </Link>
      </div>
      <div className="menu">
        <ul className="d-flex">
          {menu?.map((v, i) => (
            <li key={v.name} className="mx-10">
              <Link to={v.link}>{v.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mypage">
        <ul className="d-flex">
          <li className="mx-10">
            <button></button>
          </li>
          <li className="mx-10">
            <button></button>
          </li>
        </ul>
      </div>

      {/* <div className="resBtn" onClick={""}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </header>
  )
}

export default HeaderCp;