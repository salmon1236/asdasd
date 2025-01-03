// ImgAtm.jsx
const ImgAtm = ({ srcProps, altProps, ...props }) => {
  console.log("ImgAtm_props : ", props);
  return <img {...props} className="img-root" src={srcProps} alt={altProps} />;
};
export default ImgAtm;
