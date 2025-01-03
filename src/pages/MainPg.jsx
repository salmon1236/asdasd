// MainPg.jsx
import { useEffect } from "react";
import VideoAtm from "../components/atoms/VideoAtm";
import ImgAtm from "../components/atoms/ImgAtm";
import ImgFrame from "../assets/images/yellowFrame.png";

import videoData from "../assets/data/video.json";

import animalVideo from "../assets/video/animal.mp4";
import historyVideo from "../assets/video/history.mp4";
import environmentVideo from "../assets/video/environment.mp4";
import scienceVideo from "../assets/video/science.mp4";
import travelVideo from "../assets/video/travel.mp4";

const MainPg = ({ setOpenResMenu }) => {
  console.log(videoData);

  const videoLists = videoData.data;
  console.log(videoLists);
  const random = Math.floor(Math.random() * 5); // 0 ~ 4 랜덤방식으로 추출

  const selectVideo = (val) => {
    switch (val) {
      case "animal":
        return animalVideo;
      case "history":
        return historyVideo;
      case "environment":
        return environmentVideo;
      case "science":
        return scienceVideo;
      case "travel":
        return travelVideo;
      default:
        return null; // 기본값을 설정해 준다.
    }
  };

  useEffect(() => {
    setOpenResMenu(false);
  }, []);

  return (
    <section id="main" className="position-relative">
      <VideoAtm srcProps={selectVideo(videoLists[random].title)} />
      <div className="video_dark"></div>
      <div className="wrap">
        <div className="main_cont">
          <div className="content">
            <ImgAtm srcProps={ImgFrame} altProps={"National Geographic Mark"} />
            <h2>{videoLists[random].title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MainPg;
