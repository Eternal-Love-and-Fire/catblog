import { PostCard } from "@/components/user-ui/PostCard";
import { SkeletonPostCard } from "@/components/user-ui/SkeletonPostCard";
import { UserPagination } from "@/components/user-ui/UserPagination";

import { GoClock } from "react-icons/go";
import { BsStars } from "react-icons/bs";
export const Home = () => {
  const loading = false;
  const posts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <main className="mt-2 flex gap-6 flex-nowrap">
      <div className="flex items-center gap-8 flex-wrap">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SkeletonPostCard key={i} />)
          : posts.map((post) => <PostCard key={post} />)}
        <UserPagination />
      </div>
      <div className="mt-8 flex flex-col gap-6 text-3xl">
        <div className="w-16 h-16 flex items-center justify-center shadow-sm shadow-white border-2 rounded-full">
          <GoClock className="hover:opacity-50 active:opacity-80 duration-300"/>
        </div>
        <div className="w-16 h-16 flex items-center justify-center shadow-sm shadow-white border-2 rounded-full">
          <BsStars className="hover:opacity-50 active:opacity-80 duration-300"/>
        </div>
      </div>
    </main>
  );
};
