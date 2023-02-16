import { IconType } from "react-icons/lib";

interface IitemSocialMedia {
    name: string;
    link: string;
    icon: IconType;
}

export interface IObjctSocialMedias {
    medias: IitemSocialMedia[]
    telefone: string;
    telefone2?: string;
    telefone3?: string;
}