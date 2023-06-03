import Image from "next/image";
import Logo from "./Logo";
import Nav from "./Nav";

import { BiBell } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex items-center justify-center h-[10vh] w-screen border-b-2">
      <div className="wrapper w-full h-full flex items-center justify-between">
        <div className="flex items-center justify-center space-x-28">
          <Logo />
          <Nav />
        </div>

        <div className="flex items-center justify-center space-x-3">
          <button className="px-3 w-fit h-10 rounded-full border-[1px] border-gray-400">
            Create Post
          </button>

          <div className="w-10 h-10 rounded-full border-[1px] border-gray-400 flex items-center justify-center cursor-pointer">
            <BiBell className="text-xl" />
          </div>

          <Image
            src="/avatar.png"
            alt="avatar"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
