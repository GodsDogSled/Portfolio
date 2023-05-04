import Logo from "./HeaderElements/Logo";
import Hamburger from "./HeaderElements/Hambuger";

function Header(){


  return(
    <>
    <header className="header">
      <Logo />
      
      <div className="right-side-header">
        {/* <button >Dark</button> */}
        <Hamburger />
      </div>
    </header>
    </>
  )
}

export default Header;