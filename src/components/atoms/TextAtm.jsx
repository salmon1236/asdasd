// TextAtm.jsx
const TextAtm = ({ txtProps, ...props }) => {
  return (
    <p className="text-root" {...props}>
      {txtProps}
    </p>
  );
};
export default TextAtm;
