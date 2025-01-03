// ButtonAtm.jsx
const ButtonAtm = ({ btnTxtProps, ...props }) => {
  return (
    <button className="button-root" {...props}>
      {btnTxtProps}
    </button>
    // type, disabled, onclick
  );
};
export default ButtonAtm;
