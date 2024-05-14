import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IoLink, IoOpenOutline } from "react-icons/io5";

export const PostCard = () => {
  return (
    <article className="p-4 flex flex-col gap-2 items-start">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          Created by
          <Link to={`user`}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>UP</AvatarFallback>
            </Avatar>
          </Link>
          <time>3 days ago</time>
        </div>
        <div className="flex gap-2">
          <Link to={`#`}>
            <IoLink className="hover:opacity-50 duration-300 active:opacity-80"/>
          </Link>
          <Link to={`#`}>
            <IoOpenOutline className="hover:opacity-50 duration-300 active:opacity-80"/>
          </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Link to={`#`} className=" self-center">
          <div className="w-[70px] h-[70px] rounded-xl bg-white">image</div>
        </Link>
        <p className="lg:max-w-80 lg:max-h-12  overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo,
          facilis et dicta accusamus ut ducimus voluptate suscipit est similique
          iusto voluptatum nesciunt in atque quidem tenetur velit possimus.
          Soluta.
        </p>
      </div>
    </article>
  );
};
