"use client";

import { useState, useRef, useCallback } from "react";

const reviews = [
  {
    text: "Séverine a su comprendre exactement ce que nous voulions, tout en apportant des idées que nous n'aurions jamais imaginées. Notre maison est méconnaissable — dans le bon sens du terme.",
    author: "Marie & Thomas L.",
    context: "Réhabilitation maison — Loire",
    stars: 5,
  },
  {
    text: "Un accompagnement complet et rassurant. La gestion du chantier était impeccable, les artisans bien coordonnés. On a pu souffler du début à la fin.",
    author: "Jean-Pierre V.",
    context: "Rénovation appartement — Saint-Étienne",
    stars: 5,
  },
  {
    text: "Notre boutique a une identité visuelle forte depuis la refonte par Atelier 423. Le résultat attire, engage, et notre clientèle a clairement changé de perception.",
    author: "Claire D.",
    context: "Design boutique — Rhône-Alpes",
    stars: 5,
  },
  {
    text: "Professionnalisme et créativité à chaque étape. Séverine a transformé notre appartement en un lieu qui nous ressemble vraiment. Nous recommandons sans hésitation.",
    author: "Julien & Camille R.",
    context: "Rénovation complète — Lyon",
    stars: 5,
  },
  {
    text: "Le suivi de chantier a été exemplaire. Chaque détail a été pensé, les délais respectés. Un vrai plaisir de travailler avec l'Atelier 423.",
    author: "François M.",
    context: "Maîtrise d'œuvre — Roanne",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="review-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbc04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = 380;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateArrows, 400);
  }, [updateArrows]);

  return (
    <section className="reviews" id="avis">
      <div className="reviews-header">
        <div>
          <span className="section-label">Avis clients</span>
          <h2>Ce qu&apos;ils en disent</h2>
        </div>
        <div className="reviews-source">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span>Google</span>
        </div>
      </div>

      <div className="reviews-wrap">
        <button
          className={`reviews-arrow reviews-arrow--left ${canScrollLeft ? "" : "reviews-arrow--hidden"}`}
          onClick={() => scroll("left")}
          aria-label="Avis précédent"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="reviews-track" ref={trackRef} onScroll={updateArrows}>
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <Stars count={r.stars} />
              <p className="review-text">&laquo; {r.text} &raquo;</p>
              <div className="review-author">
                <span className="review-name">{r.author}</span>
                <span className="review-context">{r.context}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`reviews-arrow reviews-arrow--right ${canScrollRight ? "" : "reviews-arrow--hidden"}`}
          onClick={() => scroll("right")}
          aria-label="Avis suivant"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
