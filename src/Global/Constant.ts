import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Plans from "../Pages/Plans/Plans";
import Transformations from "../Pages/Transformations/Transformations";

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

export enum mailConstants{
  serviceID= "WSFFitness",
  templateID = "template_7bl0udx",
  userID  = "user_2c8WghgjHW7zjPSFo7oJF"
}