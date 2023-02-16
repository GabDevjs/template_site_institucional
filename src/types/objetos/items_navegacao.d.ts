import { type } from "os";
import { IconType } from "react-icons/lib";

interface IitemDaNavegacao {
    name: string;
    link: string;
    icon: IconType;
}

export type IObjctItemsNavegacao = IitemDaNavegacao[] 