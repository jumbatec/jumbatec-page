import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import AboutPage from "../Pages/AboutPage";
import ServicePage from "../Pages/ServicePage";
import ProjectPage1 from "../Pages/ProjectPage1";
import ContactPage from "../Pages/ContactPage";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },
        {
            path: "about",
            element: <AboutPage></AboutPage>,
        },
        {
          path: "service",
          element: <ServicePage></ServicePage>,
        },
        {
          path: "project",
          element: <ProjectPage1></ProjectPage1>,
        },
        {
          path: "contact",
          element: <ContactPage></ContactPage>,
        },
      ],
    },
  ]);
