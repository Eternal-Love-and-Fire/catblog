import { IoLogoOctocat } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to='/' className="opacity-70 hover:opacity-100 duration-300">
      <IoLogoOctocat />
    </Link>
  );
};
