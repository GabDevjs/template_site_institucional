import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center ">
        <i className="h-10 w-10 rounded-full bg-zinc-400 "></i>
      </div>
    </Link>
  );
};
