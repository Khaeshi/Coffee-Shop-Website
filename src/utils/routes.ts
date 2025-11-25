import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { Products } from "../pages/Products";
import { ContactUs } from "../pages/ContactUs";
import { Blog } from "../pages/Blog";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "products", Component: Products },
      { path: "contact", Component: ContactUs },
      { path: "blog", Component: Blog },
    ],
  },
]);
