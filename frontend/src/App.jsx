import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SellerHome from "./Pages/SellerHome";
import BuyerHome from "./Pages/BuyerHome";
import Error from "./Pages/Error";
import Allsaleitems from "./Seller/Allsaleitems";
import SellerForm from "./Seller/SellerForm";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/seller",
    element: <SellerHome />,
    children: [
      {
        path:'/seller',
        element:<Allsaleitems/>
      },
      {
        path:'/seller/form',
        element:<SellerForm/>
      }
    ],
  },
  {
    path: "/buyer",
    element: <BuyerHome />,
  },
]);
export default function App() {
  return <RouterProvider router={route} />;
}
