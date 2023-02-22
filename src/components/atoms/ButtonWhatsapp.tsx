
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const url = process.env.NEXT_PUBLIC_URL_WHATSAPP;

export const ButtonWhats = () => {
  
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 300 ? setIsButtonVisible(true) : setIsButtonVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      
      className={`  ${
        isButtonVisible === true ? "opacity-100   " : "opacity-0 "
      }  z-50 flex flex-col items-end transition-all duration-300`}
    >
      <Link
        href={url ? url : "#Sem Link"}
        target="_blanck"
        className=" focus:outline-secondary-green-200 group flex items-center rounded-full border border-green-300 bg-[#25d366] p-3 text-gray-100 shadow-2xl shadow-green-700 transition-all delay-700 duration-200 hover:scale-110 focus:outline-1 dark:border-green-700 md:p-4"
      >
        <BsWhatsapp className="h-8 w-8 transition-all group-hover:scale-105 lg:h-10 lg:w-10" />
      </Link>
    </div>
  );
};
