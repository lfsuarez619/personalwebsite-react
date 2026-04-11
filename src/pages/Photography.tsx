import { photos } from "../data/photos";

export default function Photography() {
    const sortedPhotos = [...photos].sort((a, b) => b.id - a.id);
    return (
        <main className="photography-page">
            <section
                className="photography-section"
                aria-labelledby="photography-title"
            >

                <h1 id="photography-title" className="photography-section__title">
                    Selected Images.
                </h1>

                <p className="photography-section__intro">
                    A collection of photographic works taken from previous web projects.
                    <br/>
                    Focused primarily on portraiture, atmosphere, and composition.
                </p>

                <div className="photo-grid">
                    {sortedPhotos.map((photo) => (
                        <figure key={photo.id} className="photo-card">
                            <img
                                src={`${import.meta.env.BASE_URL}${photo.src}`}
                                alt={photo.alt}
                                className="photo-card__image"
                                loading="lazy"
                            />
                            <figcaption className="photo-card__caption">
                                <span className="photo-card__title">{photo.title}</span>
                                <span className="photo-card__year">{photo.year}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </main>
    );
}