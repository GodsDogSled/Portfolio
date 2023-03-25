import { BrowserRouter, Routes, Route } from "react-router-dom";
import { apiPath_projects } from "../global/globals";
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { setProjectData, setLoaded } from "../features/projectsSlice";
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PageHome from "../pages/PageHome";
import PageProject from "../pages/PageProject";
import Header from "../components/Header";
function AppRouter() {

  //Get Project Data
  const projectsPath = `${apiPath_projects}`
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(projectsPath)
      if ( response.ok ) {
        const data = await response.json()
        dispatch(setProjectData(data));
        dispatch(setLoaded(true));
      } else {
        dispatch(setLoaded(false));
      }
    }
    fetchData()
    
  }, [projectsPath, dispatch])

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <main id="home">
          <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/projects/:project_slug" element={<PageProject />} />
          </Routes>
        </main>
      
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
