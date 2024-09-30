import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SellerHome from "./Pages/SellerHome";
import BuyerHome from "./Pages/BuyerHome";
import Error from "./Pages/Error";
import Allsaleitems from "./Seller/Allsaleitems";
import SellerForm from "./Seller/SellerForm";
import SellerContext from "./sellerContext/SellerContext";
import BuyerMain from "./Buyer/BuyerMain";
import BuyerShop from "./Buyer/BuyerShop";
import BuyerBlog from "./Buyer/BuyerBlog";
import BuyerAbout from "./Buyer/BuyerAbout";

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
    children:[
      {
        path:'/buyer',
        element:<BuyerMain/>
      },
      {
        path:'/buyer/shop',
        element:<BuyerShop/>
      },
      {
        path:'/buyer/blog',
        element:<BuyerBlog/>
      },
      {
        path:'/buyer/about',
        element:<BuyerAbout/>
      }
    ]
  },
]);
export default function App() {
  return (
    <SellerContext>
      <RouterProvider router={route} />
    </SellerContext>
)
}
