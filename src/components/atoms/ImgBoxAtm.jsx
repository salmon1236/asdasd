// ImgBoxAtm.jsx
import clsx from "clsx";

const ImgBoxAtm = ({ ...props }) => {
  console.log(props);
  // {className: 'bg_img', styleProps: 'animal_news_1.jpg'}
  const classNm = props.className;
  const stylePr = props.styleProps;
  return (
    // 이미지를 background-image로 스타일 적용
    <div
      className={clsx("image-item-root", classNm)}
      style={{ backgroundImage: `url(${stylePr})` }}
    ></div>
  );
};
export default ImgBoxAtm;
