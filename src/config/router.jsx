import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/common/pages/Home";
import ProductListing from "../modules/product/pages/ProductListing";
import ProductDetail from "../modules/product/pages/ProductDetail";
import RootLayout from "../modules/common/components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":category",
        element: <ProductListing />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
