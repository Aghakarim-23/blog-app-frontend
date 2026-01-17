import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="h-14 md:h-16 lg:h-20 px-4 md:px-8 border-b flex justify-between items-center relative">
        <Link href={"/"}>Logo</Link>
        <nav className="flex gap-2 md:gap-4 lg:gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blogs</Link>
        </nav>
        {user?.username ? (
          <div
            className="flex justify-center items-center gap-1 md:gap-2 lg:gap-4"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <CiUser />
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
            className="absolute top-10 right-6 shadow-md p-3 rounded-md bg-gray-100"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <button className="cursor-pointer" type="button" onClick={() => logout()}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
