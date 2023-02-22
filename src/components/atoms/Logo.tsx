import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center ">
        <i className="h-10 xl:h-12 w-10 xl:w-12 rounded-full bg-zinc-400 "></i>
      </div>
    </Link>
  );
};
