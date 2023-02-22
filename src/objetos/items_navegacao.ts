import { IObjctItemsNavegacao } from "@/types/objetos/items_navegacao";
import { AiOutlineHome } from 'react-icons/ai'
import { BsCircleFill } from "react-icons/bs";

export const ItemsNavegacao: IObjctItemsNavegacao = [
    {
        name: "Home",
        icon: AiOutlineHome,
        link: "/"
    },
    {
        name: "Blog",
        icon: BsCircleFill,
        link: "/blog"
    }
]