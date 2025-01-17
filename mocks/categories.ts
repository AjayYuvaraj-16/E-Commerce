import {
    BlazerAndJerkins,
    BlazerJerkins,
    CasualAndFormalPants,
    CoatsAndPants,
    EthnicWear,
    Shoes,
    SportsWear,
    SweatShirts,
} from "@/assets";
import { StaticImageData } from "next/image";

type CategoryType = {
    id: number;
    name: string;
    image: string | StaticImageData;
};

export const categories: CategoryType[] = [
    {
        id: 1,
        name: "Blazer & Jerkins",
        image: BlazerAndJerkins,
    },
    {
        id: 2,
        name: "Sweatshirts",
        image: SweatShirts,
    },
    {
        id: 3,
        name: "Sports Wear",
        image: SportsWear,
    },
    {
        id: 4,
        name: "Ethnic Wear",
        image: EthnicWear,
    },
    {
        id: 5,
        name: "Casual & Formal pants",
        image: CasualAndFormalPants,
    },
    {
        id: 6,
        name: "Coats & Pants",
        image: CoatsAndPants,
    },
    {
        id: 7,
        name: "Shoes",
        image: Shoes,
    },
    {
        id: 8,
        name: "Blazer & Jerkins",
        image: BlazerJerkins,
    },
];

export default categories;
