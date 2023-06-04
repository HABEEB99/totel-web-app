import SidebarItem from "./SidebarItem";

import { AiOutlineBook } from "react-icons/ai";
import { CiMail, CiViewList } from "react-icons/ci";
import { FiThumbsUp, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col space-y-6 py-3 w-[17vw]">
      <div className="flex items-center justify-between">
        <SidebarItem name="Inbox" Icon={CiMail} index={1} />
        <div className="w-8 h-6 rounded-full bg-btn mr-3 flex items-center justify-center text-sm text-white">
          13
        </div>
      </div>
      <SidebarItem name="Listings" Icon={CiViewList} index={2} />
      <SidebarItem name="Bookings" Icon={AiOutlineBook} index={3} />
      <SidebarItem name="WishList" Icon={FiThumbsUp} index={4} />
      <SidebarItem name="Settings" Icon={FiSettings} index={5} />
    </aside>
  );
};

export default Sidebar;
