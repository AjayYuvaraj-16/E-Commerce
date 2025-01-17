import MenSection from "@/components/sections/men-section/MenSection";
import WrapperContainer from "@/components/wrapper/WrapperContainer";
import { categories } from "@/mocks/categories";
import Link from "next/link";
export default function Home() {
    return (

        <WrapperContainer>
            <MenSection />
        </WrapperContainer>
    );
}


