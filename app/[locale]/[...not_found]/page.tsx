import Container from "@/components/ui/container";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Button from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function NotFound404() {
  const images: string[] = [
    "/assets/images/spawanie1.jpg",
    "/assets/images/spawanie2.jpg",
    "/assets/images/spawanie3.jpg",
    "/assets/images/spawanie4.jpg",
    "/assets/images/spawanie5.jpg",
  ];
  notFound();
  const t = await getTranslations("NotFound");
    return (
<Container>
      <div>
        
      </div>
    </Container>
    );
  }