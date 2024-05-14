import { PostCard } from "@/components/user-ui/PostCard";
import { SkeletonPostCard } from "@/components/user-ui/SkeletonPostCard";
import { UserPagination } from "@/components/user-ui/UserPagination";

export const Home = () => {
  const loading = false;
  const posts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <main className="mt-1 px-2 lg:px-4 flex items-center justify-center gap-12 flex-wrap">
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => <SkeletonPostCard key={i} />)
        : posts.map((post) => <PostCard key={post} />)}
      <UserPagination />
    </main>
  );
};
