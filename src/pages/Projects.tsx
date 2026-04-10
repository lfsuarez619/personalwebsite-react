import { projects } from "../data/projects";

export default function Projects() {
    return (
        <main className="projects-page">
            <section className="projects-section" aria-labelledby="projects-title">

                <h1 id="projects-title" className="projects-section__title">
                    Projects and client work.
                </h1>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-card__top">
                                <h2 className="project-card__title">{project.title}</h2>
                                <p className="project-card__year">{project.year}</p>
                            </div>

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="project-card__image-link"
                                aria-label={`Open ${project.title}`}
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}${project.imageSrc}`}
                                    alt={`${project.title} homepage screenshot`}
                                    className="project-card__image"
                                    loading="lazy"
                                />
                            </a>

                            <p className="project-card__description">{project.description}</p>

                            <ul
                                className="project-card__stack"
                                aria-label={`${project.title} technologies`}
                            >
                                {project.stack.map((item) => (
                                    <li key={item} className="project-card__tag">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}