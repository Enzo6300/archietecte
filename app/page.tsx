import ClientEffects from "./components/ClientEffects";
import MobileNav from "./components/MobileNav";
import ReviewsCarousel from "./components/ReviewsCarousel";

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* NAV */}
      <nav id="nav">
        <div className="nav-pill">
          <a href="#" className="nav-logo">
            Atelier <span>Batir</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">R&eacute;alisations</a></li>
            <li><a href="#avis">Avis</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">D&eacute;marrer un projet</a>
          <MobileNav />
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fond-hero.png"
            alt="Architecture moderne"
            className="hero-img"
          />
        </div>
        <div className="hero-vignette" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            <span className="line">
              <span className="line-inner">L&apos;espace que vous</span>
            </span>
            <span className="line">
              <span className="line-inner"><em>m&eacute;ritez</em></span>
            </span>
          </h1>
          <div className="hero-bottom">
            <a href="#portfolio" className="hero-cta">
              D&eacute;couvrir nos projets
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M1 5h18M14 1l5 4-5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="intro-bg"
          src="/section2-img.png"
          alt="Int&eacute;rieur design&eacute; par Atelier Batir"
        />
        <div className="intro-text reveal">
          <span className="section-label">Expertises</span>
          <h2>Chaque espace<br />raconte une histoire</h2>
          <p>
            Claire Dumont, architecte d&apos;int&eacute;rieur dans la Loire. De la r&eacute;habilitation compl&egrave;te au design de mobilier sur-mesure, l&apos;atelier prend en charge votre projet avec pr&eacute;cision et sensibilit&eacute; — de la premi&egrave;re esquisse &agrave; la remise des cl&eacute;s.
          </p>
          <a href="#services" className="intro-cta">
            En savoir plus sur l&apos;atelier
            <svg width="16" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M1 5h16M12 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <span className="section-label reveal">Expertises</span>
        <ul className="services-list">
          <li className="service-line reveal">
            <span className="service-name">Architecture d&apos;int&eacute;rieur</span>
            <span className="service-dash" />
            <span className="service-detail">Plans, volumes, mati&egrave;res &amp; lumi&egrave;res</span>
          </li>
          <li className="service-line reveal">
            <span className="service-name">R&eacute;habilitation</span>
            <span className="service-dash" />
            <span className="service-detail">Redonner vie aux b&acirc;tis existants</span>
          </li>
          <li className="service-line reveal">
            <span className="service-name">Design de mobilier</span>
            <span className="service-dash" />
            <span className="service-detail">Pi&egrave;ces uniques, sur-mesure</span>
          </li>
          <li className="service-line reveal">
            <span className="service-name">Ma&icirc;trise d&apos;&#339;uvre</span>
            <span className="service-dash" />
            <span className="service-detail">Coordination, suivi, livraison</span>
          </li>
          <li className="service-line reveal">
            <span className="service-name">Espaces professionnels</span>
            <span className="service-dash" />
            <span className="service-detail">Boutiques, bureaux, h&ocirc;tels</span>
          </li>
        </ul>
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-top reveal">
          <span className="section-label">R&eacute;alisations</span>
          <h2>Projets s&eacute;lectionn&eacute;s</h2>
        </div>
        <div className="portfolio-grid">
          <article className="pf-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80" alt="La Route des &Eacute;pices" />
            <div className="pf-info">
              <span className="pf-cat">Particulier &middot; Salon</span>
              <h3 className="pf-title">La Route des &Eacute;pices</h3>
            </div>
          </article>
          <article className="pf-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/p1.jpg" alt="Cuisine Contemporaine" />
            <div className="pf-info">
              <span className="pf-cat">Particulier &middot; Cuisine</span>
              <h3 className="pf-title">Minimalisme Chaleureux</h3>
            </div>
          </article>
          <article className="pf-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/p2.jpg" alt="Pi&egrave;ces de liaison" />
            <div className="pf-info">
              <span className="pf-cat">Particulier &middot; Couloirs</span>
              <h3 className="pf-title">Les Pi&egrave;ces de Liaison</h3>
            </div>
          </article>
          <article className="pf-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80" alt="Espace professionnel" />
            <div className="pf-info">
              <span className="pf-cat">Professionnel &middot; Bureau</span>
              <h3 className="pf-title">Studio Contemporain</h3>
            </div>
          </article>
          <article className="pf-card reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80" alt="Chambre design" />
            <div className="pf-info">
              <span className="pf-cat">Particulier &middot; Chambre</span>
              <h3 className="pf-title">S&eacute;r&eacute;nit&eacute; Nordique</h3>
            </div>
          </article>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <ReviewsCarousel />

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner reveal">
          <span className="section-label">Contact</span>
          <h2>Parlons de<br />votre projet</h2>
          <p className="contact-sub">Premi&egrave;re orientation gratuite &middot; R&eacute;ponse sous 48h</p>
          <div className="contact-links">
            <a href="tel:0612345678" className="contact-link">
              <span className="contact-link-label">T&eacute;l&eacute;phone</span>
              <span className="contact-link-val">06 12 34 56 78</span>
            </a>
            <a href="mailto:contact@atelierbatir.fr" className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-val">contact@atelierbatir.fr</span>
            </a>
          </div>
          <div className="contact-address">
            17, avenue de la Lib&eacute;ration &middot; 42400 Saint-Chamond<br />
            Zone d&apos;intervention : Rh&ocirc;ne-Alpes &middot; Auvergne
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <a href="#" className="footer-logo">Atelier <span>Batir</span></a>
        <p className="footer-copy">&copy; 2025 Atelier Batir &middot; Claire Dumont &middot; Tous droits r&eacute;serv&eacute;s</p>
        <ul className="footer-links">
          <li><a href="#">Mentions l&eacute;gales</a></li>
          <li><a href="#">Politique de confidentialit&eacute;</a></li>
        </ul>
      </footer>
    </>
  );
}
