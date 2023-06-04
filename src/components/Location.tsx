import Image from "next/image";

import { BsDot, BsThreeDots } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

interface IData {
  id: number;
  status: string;
  name: string;
  date: string;
  isVerified: boolean;
  age?: string;
  rating?: number;
  details: string;
  location: string;
  price: string;
  imageUrl: string;
}

interface ILocation {
  data: IData;
}

const Location: React.FC<ILocation> = ({ data }) => {
  return (
    <div className="w-full md:w-[25rem] lg:w-96 min-h-96 border-[1px]  border-gray-400  rounded-lg">
      <Image
        src={data.imageUrl}
        alt={data.name}
        width={300}
        height={250}
        className="object-cover rounded-t-lg w-full h-[30%]"
      />

      <div className="p-2">
        <div className="flex items-center justify-between">
          <div>
            <div
              className={`flex items-center ${
                data.status === "Published"
                  ? "text-green-500"
                  : "text-orange-400"
              }`}
            >
              <BsDot className="text-4xl" />
              <span className="text-xs font-bold">{data.status}</span>
            </div>

            <div className="flex items-center space-x-1">
              <span className="font-bold">{data.name}</span>
              {data.isVerified ? <MdVerified className="text-btn" /> : ""}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <div className="w-10 h-10 rounded-full border-[1px] border-gray-400 flex items-center justify-center">
              <HiPencil />
            </div>
            <div className="w-10 h-10 rounded-full border-[1px] border-gray-400 flex items-center justify-center">
              <BsThreeDots />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-semibold text-sm">{data.age}</span>
          <span className="font-semibold text-sm">{data.date}</span>
          <span className="text-gray-400 text-xs">{data.details}</span>
          <span className="font-semibold text-sm">
            Looking Near: {data.location}
          </span>
          <span className="font-bold text-sm">{data.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
