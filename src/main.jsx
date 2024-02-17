import { lazy, Suspense } from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import "./index.scss";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading.......</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: (
      <div>
        <Header />
        <Error />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
