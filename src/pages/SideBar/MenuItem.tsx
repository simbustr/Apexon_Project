
import { SideNavItem } from "../../types";

const MenuItem = ({ item }: { item: SideNavItem }) => {
  return (
    <div>
         <div className="flex flex-row space-x-4 items-center text-[#ccc]">
              {item.icon}
              <span className="flex text-[15px] text-[#ffff] font-semibold cursor-pointer">
                {item.title}
              </span>
            </div>
    </div>
  )
}

export default MenuItem
