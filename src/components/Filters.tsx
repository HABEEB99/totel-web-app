import { BiSearch, BiBell } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiChevronDown, FiFilter } from "react-icons/fi";

const Filters = () => {
  return (
    <div className="flex items-center justify-between w-full h-[10vh]">
      {/* search bar */}
      <div className="flex items-center justify-center space-x-3 w-68 px-2 py-1 border-[1px] border-gray-500 rounded-full">
        <BiSearch className="text-2xl text-gray-500" />
        <input
          type="text"
          placeholder="Find...."
          className="w-16 outline-none"
        />
        <button className="p-2 w-20 rounded-full bg-btn text-white">
          Search
        </button>
      </div>

      {/* middle filter */}
      <div className="hidden md:flex items-center justify-center space-x-2">
        <div className="w-14 h-12 flex items-center justify-center p-2 rounded-full bg-btn text-white text-sm font-bold">
          <span>All</span>
        </div>

        <div className="w-fit h-12 flex items-center justify-center py-2 px-4 rounded-full border-[1px] border-gray-500 text-sm font-bold">
          <span>Already Booked</span>
        </div>

        <div className="w-fit h-12 flex items-center justify-center py-2 px-4 rounded-full border-[1px] border-gray-500 text-sm font-bold">
          <span>Looking for a partner</span>
        </div>

        <div className="w-fit h-12 flex items-center justify-center py-2 px-4 rounded-full border-[1px] border-gray-500 text-sm font-bold">
          <span>Listing</span>
        </div>
      </div>

      {/* Right filter */}
      <div className="flex items-center justify-center space-x-2">
        <div className="w-fit h-12 hidden md:flex items-center space-x-3 justify-center py-2 px-4 rounded-full border-[1px] border-gray-500 text-sm font-bold">
          <span>Amenities</span>
          <FiChevronDown />
        </div>

        <div className="w-fit h-12 hidden md:flex items-center space-x-3 justify-center py-2 px-4 rounded-full border-[1px] border-gray-500 text-sm font-bold">
          <span>Post Status</span>
          <FiChevronDown />
        </div>

        <div className="w-12 h-12 rounded-full border-[1px] border-gray-500 flex items-center justify-center text-xl text-gray-500">
          <FiFilter />
        </div>

        <div className="w-12 h-12 rounded-full border-[1px] border-gray-500 flex items-center justify-center text-xl text-gray-500">
          <BsThreeDots />
        </div>

        <div className="w-12 h-12 md:hidden rounded-full border-[1px] border-gray-400 flex items-center justify-center cursor-pointer">
          <BiBell className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
