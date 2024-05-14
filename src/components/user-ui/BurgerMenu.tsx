import { HiMenuAlt2 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Nav } from "./Nav";

export const BurgerMenu = ({ classname }: { classname: string }) => {
  return (
    <nav className={`${classname}`}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <HiMenuAlt2 />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Meow</SheetTitle>
          </SheetHeader>
          <Nav classname="w-full mt-6 flex flex-col gap-2 items-start text-3xl" />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
