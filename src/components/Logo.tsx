import Image from "next/image";
import { SiHomeadvisor } from "react-icons/si";

const Logo = () => {
  return (
    // <div className="flex items-center justify-center text-xl space-x-2 text-purple-600">
    //   <SiHomeadvisor />
    //   <h1>totel</h1>
    // </div>
    <Image src="/logo.png" alt="Company Logo" width={100} height={80} />
  );
};

export default Logo;
