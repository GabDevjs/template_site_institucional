import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type ButtonProps = {
  Name?: string;
  Text?: string | ReactNode;
  Icon?: IconType;
  Disabled?: boolean;
  href?: string;
  onClick?: void;
  textColor?: string;
  textColorHover?: string;
  bgColor?: string;
  bgColorHover?: string;
  bgTransparente?: boolean;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const {
    Name,
    Text,
    Icon,
    Disabled,
    href,
    onClick,
    bgTransparente,
    className,
  } = props;
  const router = useRouter();

  return (
    <button
      type="button"
      name={Name}
      title={Name}
      aria-label={Name}
      disabled={Disabled}
      onClick={() => {
        href ? router.push(href) : null;
        onClick ? onClick : null;
      }}
      className={`inline-flex items-center  rounded-md border gap-1 border-transparent ${
        bgTransparente ? "bg-transparent  border-primary text-zinc-800" : "border-transparent bg-primary text-zinc-200 hover:bg-secondary"
      } px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2  focus:ring-offset-2
      ${className} 
      `}
    >
      {Text}
      {Icon ? <Icon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" /> : null}
    </button>
  );
};
