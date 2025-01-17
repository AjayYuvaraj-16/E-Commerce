import { StaticImageData } from "next/image";

export const isStringImage = (
    image: string | StaticImageData
): image is string => {
    return typeof image === "string";
};
