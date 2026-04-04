export default function About() {
    return (
        <main className="about-page">
            <section className="about-section" aria-labelledby="about-title">
                <p className="about-section__eyebrow">About</p>

                <h1 id="about-title" className="about-section__title">
                    A developer with a visual mindset.
                </h1>

                <div className="about-section__body">
                    <p>
                        I am a computer science graduate and web developer with an interest
                        in building digital experiences that feel clear, thoughtful, and
                        visually composed.
                    </p>

                    <p>
                        My background includes frontend and backend web development, API
                        work, responsive design, and building projects that balance
                        usability with presentation.
                    </p>

                    <p>
                        Alongside programming, I also care deeply about visual storytelling,
                        layout, and image-making. That combination shapes the way I approach
                        both design and development.
                    </p>
                </div>
            </section>
        </main>
    );
}