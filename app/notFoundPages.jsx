import tempimg from "/errorlogo.png";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#242424]">
      <div className="relative">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          404 - Not Found
        </h1>
        <div className="flex py-5 justify-center">
          <img src={tempimg} alt="Page not found" width={300} />
        </div>
        <div className="py-5">
          <Link to="/" className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
