export default function Contact() {
    return (
        <main className="contact-page">
            <section className="contact-section" aria-labelledby="contact-title">

                <h1 id="contact-title" className="contact-section__title">
                    To Contact
                </h1>

                <p className="contact-section__intro">
                    For freelance work, collaboration, or general inquiries, feel free to
                    reach out.
                </p>

                <div className="contact-list">
                    <a className="contact-link" href="lfsuarez619@gmail.com">
                        lfsuarez619@gmail.com
                    </a>

                    <a
                        className="contact-link"
                        href="https://www.github.com/lfsuarez619"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        className="contact-link"
                        href="https://www.linkedin.com/in/luis-suarezii/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
        </main>
    );
}