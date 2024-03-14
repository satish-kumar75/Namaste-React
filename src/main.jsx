import { lazy, Suspense } from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./layouts/Body";
import Home from "./layouts/Home";
import Header from "./components/Header/Header";
import ContactUs from "./layouts/ContactUs";
import Error from "./components/Error/Error";
import ResturantMenu from "./layouts/ResturantMenu";
import "./styles/index.scss";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./layouts/Cart";
import Footer from "./components/Footer/Footer";

const About = lazy(() => import("./layouts/About"));
const Grocery = lazy(() => import("./layouts/Grocery"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
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
        element: <Home />,
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
      {
        path: "/cart",
        element: <Cart />,
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
