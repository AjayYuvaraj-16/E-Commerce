import { StaticImageData } from "next/image";

interface TrendyProduct {
    id: number;
    img: string;
    title: string;
    shortDescription?: string;
    price: number;
    discountedPrice?: number;
    discountPercentage?: number;
    category?: "men" | "women" | "kids"; // Added category key
}

export const trendyProducts: TrendyProduct[] = [
    {
        id: 1,
        img: "https://medias.utsavfashion.com/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-georgette-kurta-in-yellow-v2-mxx175.jpg",
        title: "Kurta",
        shortDescription: "Lady Chris wear",
        price: 1000,
        discountedPrice: 800,
        discountPercentage: 20,
        category: "women", // Added category
    },
    {
        id: 2,
        img: "https://i.pinimg.com/236x/69/90/7b/69907b5b50fe5d4aba3d8cc97afe49fa.jpg",
        title: "Blazer",
        shortDescription: "Lady Chris wear",
        price: 1500,
        discountedPrice: 1000,
        discountPercentage: 33.33,
        category: "women", // Added category
    },
    {
        id: 3,
        img: "https://veirdo.in/cdn/shop/files/51_1_23bf5d9e-3ef1-4cc2-a197-6beccdd3d6aa.jpg?v=1729750441",
        title: "Hoodie",
        shortDescription: "Lady Chris wear",
        price: 2500,
        discountedPrice: 1800,
        discountPercentage: 28,
        category: "men", // Added category
    },
    {
        id: 4,
        img: "https://veirdo.in/cdn/shop/files/51_1_23bf5d9e-3ef1-4cc2-a197-6beccdd3d6aa.jpg?v=1729750441",
        title: "Hoodie",
        shortDescription: "Lady Chris wear",
        price: 2500,
        discountedPrice: 1800,
        discountPercentage: 28,
        category: "men", // Added category
    },
    {
        id: 5,
        img: "https://example.com/kids-shirt.jpg",
        title: "Kids T-Shirt",
        shortDescription: "Comfortable cotton t-shirt",
        price: 500,
        discountedPrice: 400,
        discountPercentage: 20,
        category: "kids", // Added category
    },
    {
        id: 6,
        img: "https://i.pinimg.com/236x/69/90/7b/69907b5b50fe5d4aba3d8cc97afe49fa.jpg",
        title: "Blazer",
        shortDescription: "Lady Chris wear",
        price: 1500,
        discountedPrice: 1000,
        discountPercentage: 33.33,
        category: "men", // Added category
    },
];
