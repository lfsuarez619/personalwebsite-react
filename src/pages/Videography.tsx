export default function Videography() {
    const vimeoEmbedUrl = "https://player.vimeo.com/video/1189202680";

    return (
        <main className="videography-page">
            <section
                className="videography-section"
                aria-labelledby="videography-title"
            >
                <h1 id="videography-title" className="videography-section__title">
                    Videography
                </h1>

                <p className="videography-section__intro">
                    A collection of video work, primarily for websites produced.
                    <br />
                    <em>All videos Produced, Written, and Directed by Luis Suarez unless
                        stated otherwise.</em>
                </p>

                <figure className="video-card">
                    <div className="video-card__embed">
                        <iframe
                            src={vimeoEmbedUrl}
                            className="video-card__iframe"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Videography reel"
                        />
                    </div>

                    <figcaption className="video-card__caption">
                        Spring Valley Cleaners promotional video
                    </figcaption>
                </figure>
            </section>
        </main>
    );
}