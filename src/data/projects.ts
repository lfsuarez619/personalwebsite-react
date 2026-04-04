export type Project = {
    id: number;
    title: string;
    description: string;
    stack: string[];
    year: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Film Diary",
        description:
            "A personal film-tracking web application focused on clean writing, protected user workflows, and a text-first diary experience.",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        year: "2026",
    },
    {
        id: 2,
        title: "Invoice API Assessment",
        description:
            "A REST API and relational database project for invoice orders, line items, and secure request handling with spec-matching JSON responses.",
        stack: ["Node.js", "Express", "SQL Server", "Docker"],
        year: "2026",
    },
    {
        id: 3,
        title: "Personal Website",
        description:
            "A rebuilt portfolio site focused on preserving a minimal visual identity while using modern React architecture and reusable components.",
        stack: ["React", "TypeScript", "Vite"],
        year: "2026",
    },
];