import { FaApple } from "react-icons/fa";
import {
  BsApple,
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsPlayFill,
} from "react-icons/bs";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-screen h-[25vh] border-t-[1px] border-gray-400 py-8">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14 place-items-center mb-8">
          <div>
            <h2 className="mb-3 text-sm font-bold">Products</h2>
            <ul className="flex flex-col space-y-2 text-sm text-gray-500">
              <li>Features</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold">Products</h2>
            <ul className="flex flex-col space-y-2 text-sm text-gray-500">
              <li>Features</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold">Resources</h2>
            <ul className="flex flex-col space-y-2 text-sm text-gray-500">
              <li>Partners</li>
              <li>Developers</li>
              <li>Community</li>
              <li>Apps</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold">Company</h2>
            <ul className="flex flex-col space-y-2 text-sm text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold">Mobile app</h2>

            <div className="flex flex-col space-y-2">
              <div className="w-fit h-12 text-white rounded-md bg-black flex items-center px-2 py-3 space-x-1">
                <BsApple className="text-3xl font-bold" />
                <div className="flex flex-col">
                  <span className="text-xs">Download on the</span>
                  <h3 className="text-xl font-bold">App Store</h3>
                </div>
              </div>

              <div className="w-fit h-12 text-white rounded-md bg-black flex items-center px-2 py-3 space-x-1">
                <BsPlayFill className="text-3xl font-bold" />
                <div className="flex flex-col">
                  <span className="text-xs">GET IT ON</span>
                  <h3 className="text-xl font-bold">Google Play</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-between">
          <Logo />
          <span>&copy; 2023 Totel. All Rights Reserved</span>

          <div className="flex items-center justify-center space-x-2">
            <BsFacebook />
            <BsGoogle />
            <FaApple />
            <BsInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
