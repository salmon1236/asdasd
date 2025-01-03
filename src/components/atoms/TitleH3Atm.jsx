// TitleH3Atm.jsx
const TitleH3Atm = ({ titProps, ...props }) => {
  return (
    <h3 {...props} className="title-h3-root">
      {titProps}
    </h3>
  );
};
export default TitleH3Atm;
