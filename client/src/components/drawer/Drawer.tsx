import {
  IoBodyOutline,
  IoFolderOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "../ui/separator";
import useAuthStore from "@/store/user.store";
import { firstTwoNames } from "@/utils/textFormate";
import { useNavigate } from "react-router-dom";

interface IDrawerItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

const drawerItems: IDrawerItem[] = [
  {
    name: "Home",
    icon: <IoHomeOutline className="w-6 h-6 lg:w-4 lg:h-4" />,
    path: "/",
  },
  {
    name: "Pacientes",
    icon: <IoBodyOutline className="w-6 h-6 lg:w-4 lg:h-4" />,
    path: "/pacientes",
  },
  {
    name: "Agendamentos",
    icon: <IoFolderOutline className="w-6 h-6 lg:w-4 lg:h-4" />,
    path: "/agendamentos",
  },
  {
    name: "Usuários",
    icon: <IoPersonOutline className="w-6 h-6 lg:w-4 lg:h-4" />,
    path: "/usuarios",
  },
];

const Drawer = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={`lg:w-60 w-20 bg-white border-l border-[1px]  h-screen transition-all duration-300 fixed z-50 overflow-hidden`}
    >
      <div className="p-4">
        <div>
          <Avatar className="mx-auto mt-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="hidden lg:flex justify-center text-xl font-medium text-[#333333] mt-5">
            {firstTwoNames(user?.nomeCompleto!)}
          </h2>
          <p className="hidden lg:flex  justify-center text-[#9E9E9E]">
            Administrador
          </p>
          <Separator className="my-5" />
          <div>
            {drawerItems.map((item: IDrawerItem, index: number) => (
              <div
                onClick={() => handleNavigate(item.path)}
                key={index}
                className="my-2 flex items-center space-x-2 p-2 cursor-pointer hover:bg-[#014C90] transition duration-300 hover:text-white text-[#9E9E9E] rounded-md"
              >
                <span className="mx-auto lg:mx-0">{item.icon}</span>
                <span className="hidden lg:flex">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
