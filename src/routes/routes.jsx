import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import MenuDatail from "../menuComponents/ourMenu/MenuDatail";
import Cart from "../pages/Cart/Cart";
import Checkout from "../menuComponents/Checkout/Checkout";
import ContactPage from "../pages/ContactPage/ContactPage";
import Reservation from "../othersComponents/Reservation/Reservation";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/food-menu",
        element: <Menu></Menu>,
      },
      {
        path: "/food-menu/:id/:price",
        element: <MenuDatail></MenuDatail>,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}&&price?price=${params.price}`),
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/reservation",
        element: <Reservation></Reservation>
      },
      {
        path: "/my-cart",
        element: <Cart></Cart>
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>
      },
    ],
  },
]);

export default router;
