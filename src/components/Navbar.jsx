import { Link } from "react-router";
import { useMyContext } from "../context/MyContext";

const Navbar = () => {
  const { count } = useMyContext();

  return (
    <div className="py-4 px-6 flex justify-between bg-blue-200">
      <div className="text-2xl font-bold text-blue-700">Shopping App</div>
      <div className="flex gap-2">
        <input className="b-1 py-1 px-2 rounded-md border-1" />
        <button className="b-1 py-1 px-2 rounded-md">Search</button>
      </div>
      <div className="flex gap-2">
        <Link to="/profile" className="border-1 ">
          Profile
        </Link>
        <Link to="/signup" className="border-1">
          Signup
        </Link>
        <p>Value : {count}</p>
      </div>
      <div className="bg-blue-900 rounded-full h-5 w-5"></div>
    </div>
  );
};

export { Navbar };
