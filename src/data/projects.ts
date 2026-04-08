export type Project = {
    id: number;
    title: string;
    description: string;
    stack: string[];
    year: string;
    imageSrc: string;
    liveUrl: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Film Diary",
        description: `A personal film-tracking web application focused on clean writing, protected user workflows, and a text-first diary experience.
(USERNAME: test3@example.com  PASSWORD: password123)`,
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        year: "2026",
        imageSrc: "projects/film-diary.png",
        liveUrl: "https://film-diary-eight.vercel.app/login",
    },
    {
        id: 2,
        title: "Invoice API Assessment",
        description:
            "A REST API and relational database project for invoice orders, line items, and secure request handling with spec-matching JSON responses.",
        stack: ["Node.js", "Express", "SQL Server", "Docker"],
        year: "2026",
        imageSrc: "projects/invoice-api.png",
        liveUrl: "https://github.com/lfsuarez619/ace-dev-candidate-test",
    },
    {
        id: 3,
        title: "Personal Website",
        description:
            "A rebuilt portfolio site focused on preserving a minimal visual identity while using modern React architecture and reusable components.",
        stack: ["React", "TypeScript", "Vite"],
        year: "2026",
        imageSrc: "projects/personal-website.png",
        liveUrl: "https://lfsuarez619.github.io/luisswebsite/",
    },
    {
        id: 4,
        title: "Spring Valley Dry Cleaners",
        description:
            "A commercial website built for a local dry cleaning business with a clean customer-facing interface, clear service information, and a professional web presence tailored to the client.",
        stack: ["React", "TypeScript", "Vite"],
        year: "2026",
        imageSrc: "projects/spring-valley-dry-cleaners.png",
        liveUrl: "https://www.springvalleycleaners.com/",
    },
];