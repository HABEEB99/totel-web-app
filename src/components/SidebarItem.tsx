import { IconType } from "react-icons";

interface ISidebarItemProp {
  name: string;
  Icon: IconType;
  index: number;
}

const SidebarItem: React.FC<ISidebarItemProp> = ({ name, Icon, index }) => {
  return (
    <div
      className={` flex space-x-2 items-center w-full px-4 py-2 cursor-pointer ${
        index === 2
          ? "border-l-4 border-btn text-btn bg-slate-200"
          : "text-gray-500"
      }`}
    >
      <Icon className="text-2xl " />
      <span className="text-sm font-bold ">{name}</span>
    </div>
  );
};

export default SidebarItem;
