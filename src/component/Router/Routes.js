import { createBrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/footer',
        element:<Footer></Footer>
      }
    ],
  },
]);

export default router;
