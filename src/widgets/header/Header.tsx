import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { BurgerMenu } from "@/components/user-ui/BurgerMenu";
import { Logo } from "@/components/user-ui/Logo";
import { Nav } from "@/components/user-ui/Nav";

export const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center text-3xl font-bold">
      <nav className="flex gap-2 md:gap-6 items-center">
        <BurgerMenu classname="block md:hidden" />
        <Logo />
        <Nav classname="hidden md:flex" />
      </nav>
      <div className="ml-6 flex items-center gap-2 md:gap-4">
        <Input placeholder="Search" />
        <Link to={"https://github.com/Eternal-Love-and-Fire"} target="_blank">
          <FaGithub />
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};
