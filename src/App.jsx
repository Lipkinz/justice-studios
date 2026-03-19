import "./index.css";

const artworkItems = [
  {
    title: "Tom Wellstone JusTice",
    subtitle: "Art by Tom Wellstone",
    image: "/art/justice-the-almighty.jpg",
  },
  {
    title: "Billie Eilish JusTice - Sexy Vampire",
    subtitle: "Art by Tom Wellstone",
    image: "/art/sexy-vampire.png",
  },
  {
    title: "Billie Eilish JusTice - Little Queen",
    subtitle: "Art by Tom Wellstone",
    image: "/art/little-queen.jpg",
  },
];

const socialLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/5E4fq5Lx1Y2UTY5bHo79RY?si=mX0DDLlIQxqYKrtaCbwWtQ",
    description: "Listen to Dye",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tom_wellstone/",
    description: "Tom Wellstone Instagram.",
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/tom-wellstone",
    description: "Tom Wellstone SoundCloud.",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TomWellstone",
    description: "Tom Wellstone YouTube Channel.",
  },
];

export default function App() {
  return (
      <div className="site-shell">
        <header className="topbar">
          <a href="#" className="brand-lockup">
            <img
                src="/branding/justice-mark.png"
                alt="Justice Studios lion crest"
                className="brand-mark"
            />
            <div>
              <p className="eyebrow">Creative Studio</p>
              <h1 className="brand-name">Justice Studios</h1>
            </div>
          </a>

          <nav className="nav">
            <a href="#music">Music</a>
            <a href="#gallery">Gallery</a>
            <a href="#links">Links</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-bg-glow hero-bg-red" />
            <div className="hero-bg-glow hero-bg-blue" />

            <div className="hero-copy">
              <p className="hero-kicker">Art · Music · Identity</p>
              <h2>
               Tom Wellstone.
                <span>JusTice Studios.</span>
              </h2>
              <p className="hero-text">
                Tom Wellstone is Alternative Rock Musciain illustaror gamer, and vlogger focues on delivering,
                not only music but lifestyle motives too, welcome to join me
                in my journey.
              </p>

              <div className="hero-actions">
                <a href="#music" className="btn btn-primary">
                  Listen to Dye
                </a>
                <a href="#gallery" className="btn btn-secondary">
                  View Artwork
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <img
                  src="/branding/justice-mark.png"
                  alt="Justice Studios crest"
                  className="hero-logo"
              />
            </div>
          </section>

          <section id="music" className="section release-section">
            <div className="section-heading">
              <p className="section-tag">Featured Release</p>
              <h3>Dye</h3>
              <p className="section-copy">
                Tom Wellstone - Dye the latest EP releasing from JusTice Studios,
                Alternative Rock, trying to express things that happened
                throughout my life in latest events. Along with mutual
                feelings of anger that anyone might be able to relate to.
                Welcome to listen to my album and express your opinion.
              </p>
            </div>

            <div className="release-grid">
              <div className="release-card release-copy-card">
                <p className="release-label">Now Streaming</p>
                <h4 className="release-title">Dye</h4>
                <p className="release-text">
                  Tom Wellstone - Dye.
                </p>

                <div className="platform-row">
                  {socialLinks.map((link) => (
                      <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="platform-pill"
                      >
                        {link.label}
                      </a>
                  ))}
                </div>
              </div>

              <div className="release-card spotify-card">
                <iframe
                    title="Spotify album player for Dye"
                    src="https://open.spotify.com/embed/album/446Hv06tVKbfK8GjBhDNGS?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
              </div>
            </div>
          </section>

          <section id="gallery" className="section">
            <div className="section-heading">
              <p className="section-tag">Artwork</p>
              <h3>Tom Wellstone illustartions.</h3>
              <p className="section-copy">
                Tom Wellstone trying to walk in the fine line of modern art,
                hand made illustrations.
                both digital and human made. Welcome to watch the rotating gallery of my presented
                artworks.
              </p>
            </div>

            <div className="gallery-grid">
              {artworkItems.map((item) => (
                  <article key={item.title} className="art-card">
                    <div className="art-image-wrap">
                      <img src={item.image} alt={item.title} className="art-image" />
                    </div>

                    <div className="art-meta">
                      <p className="art-subtitle">{item.subtitle}</p>
                      <h4>{item.title}</h4>
                    </div>
                  </article>
              ))}
            </div>
          </section>

          <section id="links" className="section">
            <div className="section-heading">
              <p className="section-tag">JusTice Studios Links</p>
              <h3>Tom Wellstone.</h3>
            </div>

            <div className="links-grid">
              {socialLinks.map((link) => (
                  <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-tile"
                  >
                    <span>{link.label}</span>
                    <strong>{link.description}</strong>
                  </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>Tom Wellstone - Justice Studios since 2026.</p>
          <span>Art, music, identity.</span>
        </footer>
      </div>
  );
}