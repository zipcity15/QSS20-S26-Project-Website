const GITHUB_URL = 'https://github.com/zipcity15/QSS20-S26-Final_Project-Jack_Zipper';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <p className="hero-meta">QSS 20 · Spring 2026 · Jack Zipper</p>
        <h1>
          Who Gets Help?<br />
          <span>Aid Allocation &amp; Conflict</span><br />
          in the DRC
        </h1>
        <p className="hero-sub">
          A data-driven investigation into whether humanitarian aid reaches the
          most violence-affected communities across the Democratic Republic of Congo —
          and how that relationship has shifted since the 2025 USAID freeze.
        </p>
        <div className="hero-buttons">
          <a className="btn btn-primary" href="#question">Read the Story ↓</a>
          <a className="btn btn-outline" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub Repo ↗
          </a>
          <a className="btn btn-outline" href="/QSS_20_Final_Paper_Jack_Zipper.pdf" target="_blank" rel="noreferrer">
            Read the Paper ↗
          </a>
        </div>

        <div className="stat-grid">
          {[
            { num: '4,900+', label: 'IATI aid projects' },
            { num: '146',    label: 'Admin-2 territories (national)' },
            { num: '5 yr',   label: 'Panel: 2021–2026' },
            { num: '10,500+',label: 'Territory-months analyzed' },
            { num: '+1.5',   label: 'Under-served territories added per quarter' },
          ].map(({ num, label }) => (
            <div className="stat-card" key={label}>
              <div className="num">{num}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
