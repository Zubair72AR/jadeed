import Link from "next/link";
import React from "react";

const navLink = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/verify-email",
    label: "Verify Email",
  },
  {
    path: "/email-verified",
    label: "Verification-Done",
  },
  {
    path: "/not-verified",
    label: "Not-Verified",
  },
];
export default function Header() {
  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2">
      <nav className="w-full flex justify-between items-center gap-2">
        {navLink.map((nav, i) => (
          <Link
            key={i}
            href={nav.path}
            className="bg-[#e65f2b] text-white rounded-md px-4 py-2 shadow-lg text-sm hover:bg-zinc-900 transition-all duration-200"
          >
            {nav.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
