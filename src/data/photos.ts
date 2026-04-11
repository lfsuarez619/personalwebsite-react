export type Photo = {
    id: number;
    title: string;
    alt: string;
    src: string;
    year: string;
};

export const photos: Photo[] = [
    {
        id: 1,
        title: "Sky Walker [1]",
        alt: "White streak across the blue evening sky, horizontal",
        src: "photos/IMG_0208.jpeg",
        year: "2024",
    },
    {
        id: 2,
        title: "Sky Walker [2]",
        alt: "White streak across the blue evening sky, vertical",
        src: "photos/IMG_0210.jpeg",
        year: "2024",
    },
    {
        id: 3,
        title: "Faux Marlboro Ad, Desk",
        alt: "Black and white image of Marlboro cigarettes with lighter on desk",
        src: "photos/IMG_0972.jpeg",
        year: "2025",
    },
    {
        id: 4,
        title: "Faux Marlboro Ad, Window Sill",
        alt: "Black and white image of Marlboro cigarettes sitting on window sill",
        src: "photos/IMG_1075.jpeg",
        year: "2025",
    },
    {
        id: 5,
        title: "Steaming Suit",
        alt: "Dry cleaning employee steams a suit",
        src: "photos/IMG_6720 copy.jpg",
        year: "2026",
    },
    {
        id: 6,
        title: "Iron at Rest, Hands in Motion",
        alt: "Dry cleaning employee readies a garmet to be steamed as her" +
            "hot iron waits",
        src: "photos/IMG_6742 copy.jpg",
        year: "2026",
    },
    {
        id: 7,
        title: "Spring Valley Cleaners",
        alt: "Establishing shot of the interior Spring Valley Cleaners façade",
        src: "photos/IMG_6814 copy.jpg",
        year: "2026",
    },
];