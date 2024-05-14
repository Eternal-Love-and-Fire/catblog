import { Link } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";

export const Nav = ({ classname }: { classname?: string }) => {
  const registered = false;
  return (
    <nav className={`flex items-center gap-2 text-sm font-bold ${classname}`}>
      {registered ? (
        <>
          <h3>Username</h3>
          <Button variant={"ghost"} className="rounded-2xl text-sm">
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Button variant={"ghost"}>Log In</Button>
          <Button variant={"ghost"}>Sign Up</Button>
        </>
      )}
      <Link to={`/posts/create`} className={buttonVariants({ variant: "ghost" }) + " font-bold tracking-wider"}>Create Post</Link>
    </nav>
  );
};
