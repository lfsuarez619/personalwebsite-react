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
        alt: "Black and white portrait photograph",
        src: "photos/IMG_0208.jpeg",
        year: "2024",
    },
    {
        id: 2,
        title: "Untitled",
        alt: "Architectural photograph",
        src: "photos/IMG_0210.jpeg",
        year: "2024",
    },
    {
        id: 3,
        title: "Untitled",
        alt: "Street photograph at night",
        src: "photos/IMG_0972.jpeg",
        year: "2024",
    },
    {
        id: 4,
        title: "Untitled",
        alt: "Portrait photograph with dramatic lighting",
        src: "photos/IMG_1075.jpeg",
        year: "2024",
    },
];