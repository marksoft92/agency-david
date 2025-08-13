import type { Metadata } from "next";

const siteUrl = "https://www.bienkowski.dev";

export const defaultMeta = {
    siteUrl,
    title: "BIENKOWSKI.DEV – Twój pomysł, nasz kod!",
    description:
        "Projektujemy nowoczesne strony internetowe, tworzymy aplikacje webowe i wdrażamy inteligentne rozwiązania smart home. Od pomysłu, przez projekt, po wdrożenie – wszystko w jednym miejscu.",
    image: "/og-image.jpg",
    creator: "Dawid Bienkowski",
    keywords: [
        "strony internetowe",
        "aplikacje webowe",
        "smart home",
        "web development",
        "frontend",
        "backend",
        "fullstack",
    ],
};

export const createMetadata = (overrides: Partial<Metadata> = {}): Metadata => {
    const canonicalUrl =
        typeof overrides.alternates?.canonical === "string"
            ? overrides.alternates.canonical
            : defaultMeta.siteUrl;

    // OpenGraph images - zawsze tablica obiektów
    let ogImages: NonNullable<Metadata["openGraph"]>["images"] = [
        {
            url: defaultMeta.image,
            width: 1200,
            height: 630,
            alt: defaultMeta.title,
        },
    ];

    const overrideOGImages = overrides.openGraph?.images;
    if (overrideOGImages) {
        const imgs = Array.isArray(overrideOGImages) ? overrideOGImages : [overrideOGImages];

        ogImages = imgs.map((img) => {
            if (typeof img === "string")
                return { url: img, width: 1200, height: 630, alt: String(overrides.title || defaultMeta.title) };
            if (img instanceof URL)
                return { url: img.toString(), width: 1200, height: 630, alt: String(overrides.title || defaultMeta.title) };
            if ("url" in img)
                return {
                    url: img.url.toString(),
                    width: img.width,
                    height: img.height,
                    alt: img.alt ? String(img.alt) : String(overrides.title || defaultMeta.title)
                };
            return { url: defaultMeta.image, width: 1200, height: 630, alt: defaultMeta.title };
        });
    }



    // Twitter images - zawsze string URL
    let twitterImages: string[] = [defaultMeta.image];
    if (overrides.twitter?.images) {
        const imgs = Array.isArray(overrides.twitter.images)
            ? overrides.twitter.images
            : [overrides.twitter.images];

        twitterImages = imgs.map((img) => {
            if (typeof img === "string") return img;
            if (img instanceof URL) return img.toString();
            if ("url" in img) return img.url.toString();
            return defaultMeta.image;
        });
    }

    return {
        metadataBase: new URL(defaultMeta.siteUrl),
        title: overrides.title || defaultMeta.title,
        description: overrides.description || defaultMeta.description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: overrides.title || defaultMeta.title,
            description: overrides.description || defaultMeta.description,
            url: canonicalUrl,
            type: "website",
            images: ogImages,
        },
        twitter: {
            card: "summary_large_image",
            title: overrides.title || defaultMeta.title,
            description: overrides.description || defaultMeta.description,
            images: twitterImages,
        },
        ...overrides,
    };
};
