import TextAtm from "../atoms/TextAtm"; 


const FooterCp = () => {

  const date = new Date();
  const year = date.getFullYear();

  <footer>
    <TextAtm txtProps={`CopyRights &Copy; National Geographic ${year}`} />
  </footer>
}

export default FooterCp;