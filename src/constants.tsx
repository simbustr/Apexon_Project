import { MdSpaceDashboard } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { MdSettingsInputComponent } from "react-icons/md";
import { SideNavItem } from "./types";


export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "DashBoard",
    path: "/dashboard",
    icon: <MdSpaceDashboard width="24" height="24" />,
  },
  {
    title: "Task Analytics",
    path: "#",
    icon: <IoDocumentTextSharp width="24" height="24" />,
  },
  {
    title: "Document",
    path: "#",
    icon: <FaUserTie width="24" height="24" />,
  },
  {
    title: "Component",
    path: "#",
    icon: <MdSettingsInputComponent width="24" height="24" />,
  },
  {
    title: "Admin",
    path: "#",
    icon: <MdOutlineVerifiedUser width="24" height="24" />,
  },

 
];
