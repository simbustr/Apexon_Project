import { SIDENAV_ITEMS } from "../../constants";
import MenuItem from "./MenuItem";
import logo from "../../assets/logo.png";

const SideBarPage = () => {
  return (
    <div  >
       <div className="md:w-60 p-4  bg-[#00000091] h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
   
       <div className="flex flex-col space-y-6 w-full ">
      
       <div className="text-center bg-white flex justify-center ">
       <img src={logo} alt="Logo" style={{ width: "150px" }} />
       </div>

        <div className="flex flex-col space-y-2 p-5 items-start">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
        </div>
      
    </div>
    </div>
  )
}

export default SideBarPage
