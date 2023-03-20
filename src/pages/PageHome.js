import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux"
import { appTitle, apiPath_pages } from "../global/globals";
import Header from "../components/Header.js";


const PageHome = () => {

  // API Variables
  const homePagePath = `${apiPath_pages}?slug=home`
  const [homePageData, setHomePageData] = useState([])
  const [isHomePageLoaded, setHomePageLoadStatus] = useState(false)

  const projectsData = useSelector((state) => state.project.projects)


  useEffect(() => {
    document.title = `${appTitle}`
    window.scrollTo(0, 0);
  }, [])

  return(
    <>
    <Header />
    <h1>Premium <br></br> Gabe</h1>
    
    </>
    
  );
}


export default PageHome;