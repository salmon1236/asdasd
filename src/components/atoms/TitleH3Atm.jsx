const TitleH3Atm = ({titProps, ...props}) => {
  console.log("TitleH3Atm_props :", props);
  return (
    <h3 {...props} className="title-h3-root">
      {titProps}
      </h3>
  );
};

export default TitleH3Atm;