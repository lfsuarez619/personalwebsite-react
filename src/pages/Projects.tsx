import { projects } from "../data/projects";

export default function Projects() {
    return (
        <main className="projects-page">
            <section className="projects-section" aria-labelledby="projects-title">
                <p className="projects-section__eyebrow">Projects</p>

                <h1 id="projects-title" className="projects-section__title">
                    Selected work.
                </h1>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-card__top">
                                <h2 className="project-card__title">{project.title}</h2>
                                <p className="project-card__year">{project.year}</p>
                            </div>

                            <p className="project-card__description">{project.description}</p>

                            <ul className="project-card__stack" aria-label={`${project.title} technologies`}>
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