"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { House, User, GraduationCap, BookmarkCheck, FolderOpenDot, SquareTerminal, MessageSquare } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="border-white/20 border rounded-full py-6 px-2 flex flex-col gap-6 ">
      <Link href="/" className="">
        <House size={30} className={` ${pathname === "/" ? "text-[#FF5C00]" : "text-[#7D7373]"}`} />
      </Link>

      <Link href="/aboutme">
        <User size={30} className={`${pathname === "/aboutme" ? "text-[#FF5C00]" : "text-[#7D7373]"}`} />
      </Link>

      <Link href="/eduexp">
        <GraduationCap size={30} className={`${pathname === "/eduexp" ? "text-[#FF5C00]" : "text-[#7D7373]"}`} />
      </Link>

      <Link href="/spec">
        <BookmarkCheck size={30} className={`${pathname === "/spec" ? "text-[#FF5C00]" : "text-[#7D7373]"}`} />
      </Link>

      <Link href="/projects">
        <FolderOpenDot size={30} className={`${pathname === "/projects" ? "text-[#FF5C00]" : "text-[#7D7373]"}`} />
      </Link>

      <Link href="/skills">
        <SquareTerminal size={30} className={`${pathname === "/skills" ? "text-[#FF5C00]" : "text-[#7D7373]"}`} />
      </Link>

      <Link href="/contactme">
        <MessageSquare size={30} className={`${pathname === "/contactme" ? "text-[#FF5C00]" : "text-[#7D7373]"}`} />
      </Link>
    </div>
  );
}
