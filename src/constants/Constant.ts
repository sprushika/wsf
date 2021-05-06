import Home from "../components/home/home";
import About from "../components/About/About";
import ContactUs from "../components/ContactUs/ContactUs";
import Plans from "../components/Plans/Plans";
import Transformations from "../components/Transformations/Transformations";

export const menuList = [
  { key: "1", name: "Home", path: "/", component: Home },
  { key: "2", name: "About", path: "/About", component: About },
  { key: "3", name: "Plans", path: "/Plans", component: Plans },
  { key: "4", name: "ContactUs", path: "/ContactUs", component: ContactUs },
  {
    key: "5",
    name: "Transformations",
    path: "/Transformations",
    component: Transformations,
  },
];