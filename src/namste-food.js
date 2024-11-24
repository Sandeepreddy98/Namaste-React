import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RecipeDetail from "./components/RecipeDetail";
import Shimmer from "./components/Shimmer";
import CuisineLayout from "./components/CuisineLayout";
import userContext from "./utils/userContext";

const About = lazy(() => import("./components/About"));


const AppComponent = () => {
  const [userName,setUserName] = useState()

  useEffect(() => {
    const data = {
      userName : "Sandeep"
    }
    setUserName(data.userName)
  },[])
  return (
  <userContext.Provider value={{userName : userName,setUserName}}>
  <div className="app-layout">
    <HeaderComponent />
    <Outlet />
  </div>
  </userContext.Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recipes",
        children: [
          {
            path: "cuisine",
            element: <CuisineLayout />,
          },
          {
            path: ":recId",
            element: <RecipeDetail />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
