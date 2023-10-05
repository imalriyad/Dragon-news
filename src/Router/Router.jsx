import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Form/Login";
import Register from "../Form/Register";
import NewsDetails from "../Pages/NewDetails/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ResetPass from "../Form/ResetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: (
      <div className="my-[7%]">
        <img
          src="/src/assets/undraw_Page_not_found_re_e9o6.png"
          className="md:w-1/3 mx-auto"
          alt=""
        />
        <h1 className="text-5xl text-center ">404 Not Found</h1>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://api.npoint.io/0ca9579a0ce0c420d9f8"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "news/:newsId",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
      },
      {
        path:'/login/resetpassword',
        element:<ResetPass></ResetPass>
      }
    ],
  },
]);
export default router;
