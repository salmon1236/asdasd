// AnimalPg.jsx
import { useState, useEffect } from "react";
import subData from "../assets/data/sub.json";

import ImgBoxAtm from "../components/atoms/ImgBoxAtm";
import TextAtm from "../components/atoms/TextAtm";

import aniNewsImg1 from "../assets/images/animals/animal_news_1.jpg";
import aniNewsImg2 from "../assets/images/animals/animal_news_2.jpg";
import aniNewsImg3 from "../assets/images/animals/animal_news_3.jpg";
import aniNewsImg4 from "../assets/images/animals/animal_news_4.jpg";
import aniNewsImg5 from "../assets/images/animals/animal_news_5.jpg";
import aniNewsImg6 from "../assets/images/animals/animal_news_6.jpg";
import aniNewsImg7 from "../assets/images/animals/animal_news_7.jpg";
import aniNewsImg8 from "../assets/images/animals/animal_news_8.jpg";
import aniNewsImg9 from "../assets/images/animals/animal_news_9.jpg";
import aniNewsImg10 from "../assets/images/animals/animal_news_10.jpg";
import aniNewsImg11 from "../assets/images/animals/animal_news_11.jpg";
import aniNewsImg12 from "../assets/images/animals/animal_news_12.jpg";

const AnimalPg = ({ setOpenResMenu }) => {
  console.log(subData);
  console.log(aniNewsImg1);

  const [data, setData] = useState([]);

  const selectImg = (val) => {
    switch (val) {
      case "animal_news_1":
        return aniNewsImg1;
      case "animal_news_2":
        return aniNewsImg2;
      case "animal_news_3":
        return aniNewsImg3;
      case "animal_news_4":
        return aniNewsImg4;
      case "animal_news_5":
        return aniNewsImg5;
      case "animal_news_6":
        return aniNewsImg6;
      case "animal_news_7":
        return aniNewsImg7;
      case "animal_news_8":
        return aniNewsImg8;
      case "animal_news_9":
        return aniNewsImg9;
      case "animal_news_10":
        return aniNewsImg10;
      case "animal_news_11":
        return aniNewsImg11;
      case "animal_news_12":
        return aniNewsImg12;
      default:
        return null;
    }
  };

  useEffect(() => {
    // setData(subData?.data?.animal);
    setData(subData?.["data"]?.["animal"]);
    setOpenResMenu(false);
  }, []);

  return (
    <section className="sub_item py-70">
      <div className="wrap mx-auto">
        <h2 className="pb-20">Animal</h2>
        <div className="content d-flex flex-wrap">
          {data.map((v, i) => (
            <div className="box" key={v.txt}>
              <ImgBoxAtm
                className="bg_img"
                // styleProps={`/images/animals/${v.img}`}
                styleProps={selectImg(v.txt)}
              />
              {/* <div className="bg_img"></div> */}
              <div className="info">
                <TextAtm txtProps={v.txt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AnimalPg;
