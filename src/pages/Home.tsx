import portraitImage from "../assets/SelfPortraitOct17.svg";

export default function Home() {
    return (
        <main className="home-page">
            <section className="hero" aria-label="Introduction">
                <div className="hero__media">
                    <figure className="hero__figure">
                        <img
                            src={portraitImage}
                            alt="Portrait of Luis Suarez"
                            className="hero__image"
                        />
                        <figcaption id="caption" className="hero__caption">
                            Self-Portrait of the Artist (Age: 22)
                        </figcaption>
                    </figure>
                </div>

                <div className="hero__content">
                    <h1 className="hero__title">Luis Suarez</h1>
                    <p className="hero__description">
                        Web Developer.
                    </p>
                </div>
            </section>
        </main>
    );
}