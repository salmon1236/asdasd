const ButtonAtm = ({btnProps, ...props}) => {
  return (
    <button className="button-root" { ...props }>{btnTextProps}</button>
  );
};

export default ButtonAtm;