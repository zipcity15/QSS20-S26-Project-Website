const GITHUB_URL = 'https://github.com/zipcity15/QSS20-S26-Final_Project-Jack_Zipper';

export default function Takeaways() {
  return (
    <section id="takeaways">
      <div className="container">
        <span className="section-label">Takeaways</span>
        <h2>What the data tells us — and what comes next</h2>

        <div className="card-grid">
          {[
            {
              icon: '📍',
              title: 'Geography drives mis-allocation',
              body: 'The strongest predictor of receiving aid is not conflict intensity but physical accessibility. Border territories with chronic violence consistently appear in the bottom aid-efficiency quartile.',
            },
            {
              icon: '⏳',
              title: 'Aid does not chase conflict',
              body: 'Lagged violence negatively predicts aid spending across all three lag windows. The humanitarian system is not rapidly reorienting toward emerging hotspots — it responds slowly if at all.',
            },
            {
              icon: '🔴',
              title: 'The USAID freeze left a measurable scar',
              body: 'A clear structural break appears in January 2025. The steep post-freeze slope (+1%/quarter) represents roughly 8–10 additional territories falling into under-service within a single year.',
            },
            {
              icon: '📊',
              title: 'Displacement and aid are decoupled at province level',
              body: 'Province-level aid spend does not significantly predict net displacement flows in either direction, suggesting aid timing and targeting miss the displacement cycle.',
            },
          ].map(({ icon, title, body }) => (
            <div className="card" key={title}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{icon}</div>
              <h3>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: 0 }}>{body}</p>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: '2.5rem', marginBottom: '0.8rem' }}>Limitations &amp; future work</h3>
        <div className="callout gold">
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text)' }}>
            <li style={{ marginBottom: '0.4rem' }}>
              <strong>Conflict data ends 2024.</strong> The post-freeze period (2025–26) relies on
              IATI aid data only; a full violence panel through 2026 would sharpen the breakpoint analysis.
            </li>
            <li style={{ marginBottom: '0.4rem' }}>
              <strong>IATI coverage is incomplete.</strong> Not all donors report to IATI;
              bilateral Chinese and Russian aid is largely absent.
            </li>
            <li style={{ marginBottom: '0.4rem' }}>
              <strong>Causal identification is limited.</strong> The negative violence → aid
              coefficient could reflect reverse causality or project disruption rather than
              deliberate mis-allocation.
            </li>
            <li>
              <strong>Extension:</strong> A synthetic control or difference-in-differences design
              using non-USAID-dependent territories as controls would sharpen the freeze effect estimate.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noreferrer">
            View Full Code on GitHub ↗
          </a>
          <a className="btn btn-outline" href="#hero">Back to top ↑</a>
        </div>
      </div>
    </section>
  );
}
