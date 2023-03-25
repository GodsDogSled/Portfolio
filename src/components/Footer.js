import Logo from "./HeaderElements/Logo";


function Footer(){
  
  let today = new Date();

  return(
    <>
    <footer className="footer">
      <Logo />
      <p>© {today.getFullYear()} Gabriel Kelly</p>
      
      
    </footer>
    </>
  )
}

export default Footer;