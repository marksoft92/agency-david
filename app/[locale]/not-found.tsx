import Container from "@/components/ui/container";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Button from "@/components/ui/button";

export default async function NotFound() {
    const images: string[] = [
        "/assets/images/spawanie1.jpg",
        "/assets/images/spawanie2.jpg",
        "/assets/images/spawanie3.jpg",
        "/assets/images/spawanie4.jpg",
        "/assets/images/spawanie5.jpg",
    ];
    const t = await getTranslations("NotFound");
    return (
        <Container>
     <></>
                
        </Container>
    );
}