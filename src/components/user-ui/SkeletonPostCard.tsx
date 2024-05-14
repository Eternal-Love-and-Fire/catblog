import { IoLink, IoOpenOutline } from "react-icons/io5";
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router-dom";

export const SkeletonPostCard = () => {
  return (
    <article className="p-4 flex flex-col gap-2 items-start">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          Created by
          <Skeleton className="w-10 h-10 rounded-full" />
          <time>... time ago</time>
        </div>
        <div className="flex gap-2">
          <Link to={`#`}>
            <IoLink />
          </Link>
          <Link to={`#`}>
            <IoOpenOutline />
          </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Skeleton className="w-[70px] h-[70px]" />
        <p className="lg:max-w-80 lg:max-h-12 flex flex-col gap-2">
          <Skeleton className="lg:max-w-80 min-w-60 h-4 lg:max-h-12" />
          <Skeleton className="lg:max-w-80 min-w-60 h-4 lg:max-h-12" />
          <Skeleton className="lg:max-w-80 min-w-60 h-4 lg:max-h-12" />
        </p>
      </div>
    </article>
  );
};
