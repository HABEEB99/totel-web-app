import { FiChevronDown } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="hidden md:flex items-center justify-center space-x-8 text-sm font-semibold text-gray-900">
      <span>Room Stays</span>
      <span>Looking for Partner</span>
      <div className="flex items-center justify-center space-x-2">
        <span>Company</span>
        <FiChevronDown />
      </div>
      <span>My Profile</span>
      <span>Help</span>
    </nav>
  );
};

export default Nav;
