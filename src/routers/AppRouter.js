import { BrowserRouter, Routes, Route } from "react-router-dom";
import { apiPath_projects } from "../global/globals";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { setProjectData, setLoaded } from "../features/projectsSlice";
import PageHome from "../pages/PageHome";
import PageProject from "../pages/PageProject";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectPage = lazy(() => import("../pages/PageProject"));

function AppRouter() {

  //Get Project Data
  const projectsPath = `${apiPath_projects}`
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(projectsPath)
      if (response.ok) {
        const data = await response.json()
        dispatch(setProjectData(data));
        dispatch(setLoaded(true));
      } else {
        dispatch(setLoaded(false));
      }
    }
    fetchData()

  }, [projectsPath, dispatch])

  useEffect(() => {
    dispatch(setProjectData(null));
  }, [])

  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <main >
          <Routes>
            <Route path="/" element={<PageHome />} />

            <Route path="/projects/:project_slug" element={<ProjectPage />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
