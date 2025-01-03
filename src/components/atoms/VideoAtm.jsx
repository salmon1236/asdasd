const videoAtm = ({srcProps, ...props}) => {
  return (
    <video className="video-root" 
    src={srcProps}
    autoPlay 
    playsInline 
    muted 
    loop
    {...props}
    ></video>
  );
};

export default videoAtm;