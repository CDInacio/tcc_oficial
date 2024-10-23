import { IoHomeOutline } from "react-icons/io5";

interface IDrawerItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

const DrawerItems: IDrawerItem[] = [
  {
    name: "Home",
    icon: <IoHomeOutline />,
    path: "/",
  },
];

const Drawer = () => {
  return (
    <div
      className={`w-60 bg-white border-l border-[1px] text-white h-screen transition-all duration-300 fixed z-50`}
    >
      <div className="p-4"></div>
    </div>
  );
};

export default Drawer;
