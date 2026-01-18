import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="h-14 md:h-16 lg:h-20 px-4 md:px-8  flex justify-between items-center relative">
        <Link href={"/"}>Logo</Link>
        <nav className="flex gap-2 md:gap-4 lg:gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blogs</Link>
        </nav>
        {user?.username ? (
          <div
            className="flex justify-center items-center gap-1 md:gap-2 lg:gap-4 border-2 border-gray-200 rounded-md px-1 cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <FaRegUserCircle/>
            <span>{user?.username}</span>
          </div>
        ) : (
          <div className="flex gap-2 md:gap-4 lg:gap-6">
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </div>
        )}
        {isMenuOpen && (
          <div
            className="absolute top-10 md:top-12 lg:top-14 right-6 lg:right-9 shadow-md p-3 rounded-md bg-gray-100 flex flex-col gap-2"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Link href={"/dashboard"}>Dashboard</Link>
            <button className="cursor-pointer" type="button" onClick={() => logout()}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
