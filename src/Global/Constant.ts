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


export var plansList=[
  {id:1, key:"basic",Title:"BASIC",
  planOverview:"General Dental Treatment Extraction & Crown",
  planCurrency:"$",planAmount:"65",
  planBilling:"User/Month* (Billed Annually)",
  planBenefits:["One Time GP Consulation","Radiograph","Dental Scaling",
  "Invisisble Retainer","RCT Front Teeth","Filing Nano Composite","RCT Back Teeth"],
  backgroundColor: ' #00BFFF',
  isactive:false,
  showHideBtn:false,
  },

  { id:2,key:"basic1",Title:"BASIC1",
  planOverview:"General Dental Treatment Extraction & Crown",
  planCurrency:"$",planAmount:"65",
  planBilling:"User/Month* (Billed Annually)",
  planBenefits:["One Time GP Consulation","Radiograph","Dental Scaling",
  "Invisisble Retainer","RCT Front Teeth","Filing Nano Composite","RCT Back Teeth"],
  backgroundColor: ' #66CDAA',
  isactive:false,
  showHideBtn:false,
  },
  { id:3,key:"basic2",Title:"BASIC2",
  planOverview:"General Dental Treatment Extraction & Crown",
  planCurrency:"$",planAmount:"65",
  planBilling:"User/Month* (Billed Annually)",
  planBenefits:["One Time GP Consulation","Radiograph","Dental Scaling",
  "Invisisble Retainer","RCT Front Teeth","Filing Nano Composite","RCT Back Teeth"],
  backgroundColor: ' #7B68EE',
  isactive:false,
  showHideBtn:false,
  },
  { id:4,key:"basic3",Title:"BASIC3",
  planOverview:"General Dental Treatment Extraction & Crown",
  planCurrency:"$",planAmount:"65",
  planBilling:"User/Month* (Billed Annually)",
  planBenefits:["One Time GP Consulation","Radiograph","Dental Scaling",
  "Invisisble Retainer","RCT Front Teeth","Filing Nano Composite","RCT Back Teeth"],
  backgroundColor: ' #ff5c6bc7',
  isactive:false,
  showHideBtn:false,
  },


]
